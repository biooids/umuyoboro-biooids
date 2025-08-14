// src/features/exercises/exercise.service.ts

import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";
import { SubmitExerciseAnswerDto } from "./exercise.types.js";

class ExerciseService {
  /**
   * Retrieves a list of all available exercises.
   */
  async getAllExercises() {
    return prisma.exercise.findMany({
      orderBy: { exerciseNumber: "asc" },
      select: { id: true, exerciseNumber: true, title: true, isFree: true },
    });
  }

  /**
   * Starts a new exercise attempt for a user, creating a record in the database.
   */
  async startExercise(exerciseId: string, userId: string) {
    const exercise = await prisma.exercise.findUnique({
      where: { id: exerciseId },
      include: {
        questions: {
          select: { id: true, text: true, options: true, hint: true },
        },
      },
    });

    if (!exercise) {
      throw createHttpError(404, "Exercise not found.");
    }
    // Note: Payment check logic can be added here if needed in the future.

    const attempt = await prisma.userExerciseAttempt.create({
      data: { userId, exerciseId },
    });

    return { exercise, attemptId: attempt.id };
  }

  /**
   * Submits an answer for a single exercise question.
   */
  async submitAnswer(
    attemptId: string,
    input: SubmitExerciseAnswerDto,
    userId: string
  ) {
    const { questionId, selectedOptionIndex } = input;

    const attempt = await prisma.userExerciseAttempt.findUnique({
      where: { id: attemptId },
    });

    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to submit to this attempt."
      );
    }
    if (attempt.completedAt) {
      throw createHttpError(400, "This exercise has already been completed.");
    }

    const question = await prisma.exerciseQuestion.findUnique({
      where: { id: questionId },
    });
    if (!question) {
      throw createHttpError(404, "Question not found.");
    }

    const isCorrect = question.correctAnswerIndex === selectedOptionIndex;

    await prisma.exerciseAnswer.create({
      data: {
        attemptId,
        questionId,
        selectedOptionIndex,
        isCorrect,
      },
    });

    return {
      isCorrect,
      correctAnswerIndex: question.correctAnswerIndex,
    };
  }

  /**
   * Finalizes an exercise attempt, calculates the total score, and marks it as complete.
   */
  async finalizeExercise(attemptId: string, userId: string) {
    const attempt = await prisma.userExerciseAttempt.findUnique({
      where: { id: attemptId },
    });

    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to finalize this attempt."
      );
    }
    if (attempt.completedAt) {
      throw createHttpError(400, "This exercise has already been finalized.");
    }

    const correctAnswersCount = await prisma.exerciseAnswer.count({
      where: { attemptId, isCorrect: true },
    });

    await prisma.userExerciseAttempt.update({
      where: { id: attemptId },
      data: {
        score: correctAnswersCount,
        completedAt: new Date(),
      },
    });

    return { score: correctAnswersCount };
  }

  /**
   * Retrieves a summary list of all completed exercise attempts for a user.
   */
  async getExerciseHistory(userId: string) {
    return prisma.userExerciseAttempt.findMany({
      where: {
        userId: userId,
        completedAt: { not: null },
      },
      select: {
        id: true,
        score: true,
        completedAt: true,
        exercise: {
          select: {
            title: true,
            _count: {
              select: { questions: true },
            },
          },
        },
      },
      orderBy: {
        completedAt: "desc",
      },
    });
  }

  /**
   * Retrieves the detailed data for a single exercise attempt for review.
   */
  async getExerciseReview(attemptId: string, userId: string) {
    const attempt = await prisma.userExerciseAttempt.findUnique({
      where: { id: attemptId },
      include: {
        exercise: {
          include: {
            questions: true,
          },
        },
        answers: true,
      },
    });

    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to view this exercise result."
      );
    }
    if (!attempt.completedAt) {
      throw createHttpError(400, "This exercise has not been completed yet.");
    }

    return attempt;
  }
}

export const exerciseService = new ExerciseService();
