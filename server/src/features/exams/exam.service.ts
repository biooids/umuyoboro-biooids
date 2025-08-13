// src/features/exams/exam.service.ts
import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";
import { SubmitExamInputDto } from "./exam.types.js";

class ExamService {
  /**
   * Retrieves all exams from the database.
   */
  async getAllExams() {
    return prisma.exam.findMany({
      orderBy: { examNumber: "asc" },
      select: { id: true, examNumber: true, title: true, isFree: true },
    });
  }

  /**
   * Starts an exam for a user, creating an attempt record and returning the questions.
   * Crucially, it does not return the correct answers.
   */
  async startExam(examId: string, userId: string, userIsPaid: boolean) {
    // <-- ADD userIsPaid PARAMETER BACK
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

    // Re-introduce the payment check
    if (!exam.isFree && !userIsPaid) {
      throw createHttpError(403, "Payment required to access this exam.");
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
   * Submits a user's answers for a given attempt, calculates the score,
   * and returns the results along with the correct answers.
   */
  async submitExam(
    attemptId: string,
    input: SubmitExamInputDto,
    userId: string
  ) {
    const attempt = await prisma.userExamAttempt.findUnique({
      where: { id: attemptId },
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

    const exam = await prisma.exam.findUnique({
      where: { id: attempt.examId },
      include: { questions: true }, // Fetch questions with answers for grading
    });

    if (!exam) throw createHttpError(404, "Associated exam not found.");

    let score = 0;
    const correctAnswers: Record<string, number> = {};

    for (const question of exam.questions) {
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
        answers: input.answers as any,
      },
    });

    return {
      score: updatedAttempt.score,
      totalQuestions: exam.questions.length,
      correctAnswers,
    };
  }
}

export const examService = new ExamService();
