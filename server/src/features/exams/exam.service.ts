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
        // Select only the fields needed to display the questions to the user.
        questions: {
          select: { id: true, text: true, options: true },
        },
      },
    });

    if (!exam) {
      throw createHttpError(404, "Exam not found.");
    }

    // Enforce business rule: deny access to paid exams for non-paying users.
    if (!exam.isFree && !userIsPaid) {
      throw createHttpError(403, "Payment is required to access this exam.");
    }

    // Create a record of this new attempt.
    const attempt = await prisma.userExamAttempt.create({
      data: {
        userId,
        examId,
        answers: {}, // Initialize with an empty answers object.
      },
    });

    // Return the exam questions and the unique ID for this attempt.
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
    });

    // Security check: ensure the user owns this attempt.
    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to submit this attempt."
      );
    }

    // Prevent re-submission of an already completed exam.
    if (attempt.completedAt) {
      throw createHttpError(400, "This exam has already been submitted.");
    }

    // Fetch the full exam data, including correct answers, for grading.
    const exam = await prisma.exam.findUnique({
      where: { id: attempt.examId },
      include: { questions: true },
    });

    if (!exam) {
      // This is an edge case, but good to handle.
      throw createHttpError(
        404,
        "The exam associated with this attempt could not be found."
      );
    }

    let score = 0;
    const correctAnswers: Record<string, number> = {};

    // Grade the submission by iterating through the official questions.
    for (const question of exam.questions) {
      // Build a map of correct answers to return to the user for review.
      correctAnswers[question.id] = question.correctAnswerIndex;
      // Award a point if the user's answer matches the correct answer index.
      if (input.answers[question.id] === question.correctAnswerIndex) {
        score++;
      }
    }

    // Update the attempt record with the final score, completion time, and submitted answers.
    const updatedAttempt = await prisma.userExamAttempt.update({
      where: { id: attemptId },
      data: {
        score,
        completedAt: new Date(),
        answers: input.answers, // Prisma handles the JSON type.
      },
    });

    // Return the final results.
    return {
      score: updatedAttempt.score,
      totalQuestions: exam.questions.length,
      correctAnswers,
    };
  }
}

export const examService = new ExamService();
