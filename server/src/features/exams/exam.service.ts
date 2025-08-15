import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";
import { SubmitExamInputDto } from "./exam.types.js";

class ExamService {
  async getAllExams() {
    return prisma.exam.findMany({
      orderBy: { examNumber: "asc" },
      select: { id: true, examNumber: true, title: true, isFree: true },
    });
  }

  async startExam(examId: string, userId: string, userIsPaid: boolean) {
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      include: {
        questions: {
          select: { id: true, text: true, options: true },
        },
      },
    });

    if (!exam) throw createHttpError(404, "Exam not found.");
    if (!exam.isFree && !userIsPaid) {
      throw createHttpError(403, "Payment is required to access this exam.");
    }

    const attempt = await prisma.userExamAttempt.create({
      data: { userId, examId, answers: {} },
    });

    return {
      exam,
      attemptId: attempt.id,
      startedAt: attempt.startedAt,
    };
  }

  async lockAttempt(attemptId: string, userId: string) {
    const attempt = await prisma.userExamAttempt.findUnique({
      where: { id: attemptId },
    });

    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to lock this attempt."
      );
    }
    if (!attempt.lockedAt && !attempt.completedAt) {
      await prisma.userExamAttempt.update({
        where: { id: attemptId },
        data: { lockedAt: new Date() },
      });
    }
    return;
  }

  async submitExam(
    attemptId: string,
    input: SubmitExamInputDto,
    userId: string
  ) {
    // 1. Find the attempt and include related questions for scoring
    const attempt = await prisma.userExamAttempt.findUnique({
      where: { id: attemptId },
      include: {
        exam: { include: { questions: true } },
      },
    });

    // 2. Perform validation and ownership checks
    if (!attempt || attempt.userId !== userId) {
      throw createHttpError(
        403,
        "You are not authorized to submit this attempt."
      );
    }
    if (attempt.completedAt) {
      throw createHttpError(400, "This exam has already been submitted.");
    }

    // 3. Securely determine the official end time
    const officialEndTime = attempt.lockedAt ?? new Date();
    const timeElapsed = officialEndTime.getTime() - attempt.startedAt.getTime();
    const questionCount = attempt.exam.questions.length;
    const allowedDurationMillis = questionCount * 60 * 1000;
    const GRACE_PERIOD_MILLIS = 5000;

    // 4. Check if the submission is late (with a grace period)
    if (timeElapsed > allowedDurationMillis + GRACE_PERIOD_MILLIS) {
      await prisma.userExamAttempt.update({
        where: { id: attemptId },
        data: {
          score: 0,
          completedAt: new Date(),
          lockedAt: officialEndTime,
        },
      });
      throw createHttpError(
        400,
        "Time's up! The exam was submitted after the time limit expired."
      );
    }

    // 5. Calculate score and prepare answer records
    let score = 0;
    const correctAnswers: Record<string, number> = {};
    const answersToCreate = [];

    for (const question of attempt.exam.questions) {
      correctAnswers[question.id] = question.correctAnswerIndex;
      const userAnswerIndex = input.answers[question.id];

      if (userAnswerIndex !== undefined) {
        if (userAnswerIndex === question.correctAnswerIndex) {
          score++;
        }
        answersToCreate.push({
          attemptId: attemptId,
          questionId: question.id,
          selectedOptionIndex: userAnswerIndex,
        });
      }
    }

    // --- THIS IS THE FIX ---
    // We build the transaction dynamically to prevent errors with empty arrays.
    const transactionOperations = [];

    // Always update the attempt with the score and completion status.
    transactionOperations.push(
      prisma.userExamAttempt.update({
        where: { id: attemptId },
        data: {
          score,
          completedAt: new Date(),
          lockedAt: officialEndTime,
        },
      })
    );

    // Only add the createMany operation if there are answers to create.
    if (answersToCreate.length > 0) {
      transactionOperations.push(
        prisma.userExamAnswer.createMany({
          data: answersToCreate,
        })
      );
    }

    // Execute the transaction. This will no longer fail if no answers were submitted.
    await prisma.$transaction(transactionOperations);

    return {
      score,
      totalQuestions: questionCount,
      correctAnswers,
    };
  }
  async getExamHistory(userId: string) {
    return prisma.userExamAttempt.findMany({
      where: { userId, completedAt: { not: null } },
      select: {
        id: true,
        score: true,
        completedAt: true,
        exam: {
          select: { title: true, _count: { select: { questions: true } } },
        },
      },
      orderBy: { completedAt: "desc" },
    });
  }

  async getExamReview(attemptId: string, userId: string) {
    const attempt = await prisma.userExamAttempt.findFirst({
      where: { id: attemptId, userId },
      // --- CHANGE: Include the new answers relation ---
      include: {
        exam: { include: { questions: true } },
        answers: {
          select: {
            questionId: true,
            selectedOptionIndex: true,
          },
        },
      },
    });

    if (!attempt) {
      throw createHttpError(
        404,
        "Attempt not found or you are not authorized to view it."
      );
    }
    if (!attempt.completedAt) {
      throw createHttpError(400, "This exam has not been completed yet.");
    }

    // Transform the answers array into the simple key-value object the frontend expects
    const userAnswersMap = attempt.answers.reduce((acc, answer) => {
      acc[answer.questionId] = answer.selectedOptionIndex;
      return acc;
    }, {} as Record<string, number>);

    return {
      attempt: {
        id: attempt.id,
        score: attempt.score,
        completedAt: attempt.completedAt,
        answers: userAnswersMap, // Return the transformed map
      },
      exam: {
        title: attempt.exam.title,
        questions: attempt.exam.questions,
      },
    };
  }
}

export const examService = new ExamService();
