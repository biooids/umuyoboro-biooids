// src/features/exercises/exercise.service.ts
import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";

class ExerciseService {
  /**
   * Retrieves all exercises from the database.
   */
  async getAllExercises() {
    return prisma.exercise.findMany({
      orderBy: { exerciseNumber: "asc" },
      select: { id: true, exerciseNumber: true, title: true, isFree: true },
    });
  }

  /**
   * Retrieves a single exercise with all its questions, including answers and hints.
   */
  async getExerciseById(exerciseId: string, userIsPaid: boolean) {
    const exercise = await prisma.exercise.findUnique({
      where: { id: exerciseId },
      include: {
        questions: true, // Include all fields: text, options, correctAnswerIndex, hint
      },
    });

    if (!exercise) {
      throw createHttpError(404, "Exercise not found.");
    }

    // Since this is a free app as you requested, we can comment out the payment check.
    // if (!exercise.isFree && !userIsPaid) {
    //   throw createHttpError(403, "Payment required to access this exercise.");
    // }

    return exercise;
  }
}

export const exerciseService = new ExerciseService();
