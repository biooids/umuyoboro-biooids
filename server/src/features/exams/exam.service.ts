// src/features/exams/exam.service.ts

import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";
import { SubmitExamInputDto } from "./exam.types.js";

class ExamService {
  /**
   * Retrieves a list of all exams, selecting only the fields
   * necessary for a public listing to keep the payload small.
   */
  async getAllExams() {
    return prisma.exam.findMany({
      orderBy: { examNumber: "asc" },
      select: { id: true, examNumber: true, title: true, isFree: true },
    });
  }

  /**
   * Initiates an exam for a user. This involves verifying access rights,
   * creating a new attempt record in the database, and returning the questions
   * for the exam *without* the correct answers to prevent cheating.
   *
   * @param examId The ID of the exam to start.
   * @param userId The ID of the user starting the exam.
   * @param userIsPaid The payment status of the user.
   */
  async startExam(examId: string, userId: string, userIsPaid: boolean) {
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      include: {
        questions: {
          select: { id: true, text: true, options: true },
        },
      },
    });

    if (!exam) {
      throw createHttpError(404, "Exam not found.");
    }

    if (!exam.isFree && !userIsPaid) {
      throw createHttpError(403, "Payment is required to access this exam.");
    }

    const attempt = await prisma.userExamAttempt.create({
      data: {
        userId,
        examId,
        answers: {},
      },
    });

    return { exam, attemptId: attempt.id };
  }

  /**
   * Submits a user's answers for a given attempt. It validates the attempt,
   * calculates the score, saves the results, and returns the final score
   * along with the correct answers for review.
   *
   * @param attemptId The ID of the exam attempt to submit.
   * @param input The user's submitted answers.
   * @param userId The ID of the user submitting the attempt for ownership verification.
   */
  async submitExam(
    attemptId: string,
    input: SubmitExamInputDto,
    userId: string
  ) {
    const attempt = await prisma.userExamAttempt.findUnique({
      where: { id: attemptId },
      include: {
        exam: {
          include: {
            _count: {
              select: { questions: true },
            },
          },
        },
      },
    });

    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to submit this attempt."
      );
    }

    if (attempt.completedAt) {
      throw createHttpError(400, "This exam has already been submitted.");
    }

    const questionCount = attempt.exam._count.questions;
    const allowedDurationMillis = questionCount * 60 * 1000;
    const timeElapsed = new Date().getTime() - attempt.startedAt.getTime();

    if (timeElapsed > allowedDurationMillis) {
      await prisma.userExamAttempt.update({
        where: { id: attemptId },
        data: {
          score: 0,
          completedAt: new Date(),
          answers: input.answers,
        },
      });
      throw createHttpError(
        400,
        "Time's up! The exam was submitted after the time limit expired."
      );
    }

    const questions = await prisma.question.findMany({
      where: { examId: attempt.examId },
    });

    let score = 0;
    const correctAnswers: Record<string, number> = {};

    for (const question of questions) {
      correctAnswers[question.id] = question.correctAnswerIndex;
      if (input.answers[question.id] === question.correctAnswerIndex) {
        score++;
      }
    }

    const updatedAttempt = await prisma.userExamAttempt.update({
      where: { id: attemptId },
      data: {
        score,
        completedAt: new Date(),
        answers: input.answers,
      },
    });

    return {
      score: updatedAttempt.score,
      totalQuestions: questions.length,
      correctAnswers,
    };
  }

  /**
   * Retrieves a summary list of all completed exam attempts for a specific user.
   * @param userId The ID of the user whose history is being requested.
   */
  async getExamHistory(userId: string) {
    const attempts = await prisma.userExamAttempt.findMany({
      where: {
        userId: userId,
        completedAt: { not: null },
      },
      select: {
        id: true,
        score: true,
        completedAt: true,
        exam: {
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
    return attempts;
  }

  /**
   * Retrieves the detailed data for a single exam attempt for review.
   * Includes a critical security check to ensure the user owns the attempt.
   * @param attemptId The ID of the exam attempt to review.
   * @param userId The ID of the user requesting the review.
   */
  async getExamReview(attemptId: string, userId: string) {
    const attempt = await prisma.userExamAttempt.findUnique({
      where: { id: attemptId },
      include: {
        exam: {
          include: {
            questions: true,
          },
        },
      },
    });

    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to view this exam result."
      );
    }

    if (!attempt.completedAt) {
      throw createHttpError(400, "This exam has not been completed yet.");
    }

    return {
      attempt: {
        id: attempt.id,
        score: attempt.score,
        completedAt: attempt.completedAt,
        answers: attempt.answers,
      },
      exam: {
        title: attempt.exam.title,
        questions: attempt.exam.questions,
      },
    };
  }
}

export const examService = new ExamService();
