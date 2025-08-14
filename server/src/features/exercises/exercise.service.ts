// src/features/exercises/exercise.service.ts

import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";

class ExerciseService {
  /**
   * Retrieves a list of all exercises from the database.
   * Only selects fields necessary for a public listing to keep the payload efficient.
   */
  async getAllExercises() {
    return prisma.exercise.findMany({
      orderBy: { exerciseNumber: "asc" },
      select: { id: true, exerciseNumber: true, title: true, isFree: true },
    });
  }

  /**
   * Retrieves a single exercise by its ID.
   * Unlike exams, this method returns the full exercise data, including the
   * questions, correct answers, and hints, as it is intended for practice and study.
   *
   * @param exerciseId The ID of the exercise to retrieve.
   * @param userIsPaid The payment status of the requesting user.
   */
  async getExerciseById(exerciseId: string, _userIsPaid: boolean) {
    const exercise = await prisma.exercise.findUnique({
      where: { id: exerciseId },
      // Include the full question data.
      include: {
        questions: true,
      },
    });

    if (!exercise) {
      throw createHttpError(404, "Exercise not found.");
    }

    // This check can be uncommented if you decide to implement paid exercises in the future.
    // if (!exercise.isFree && !userIsPaid) {
    //   throw createHttpError(403, "Payment is required to access this exercise.");
    // }

    return exercise;
  }
}

export const exerciseService = new ExerciseService();
