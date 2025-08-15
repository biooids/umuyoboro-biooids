import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";

class ExerciseService {
  /**
   * Retrieves a list of all available exercises for public listing.
   */
  async getAllExercises() {
    return prisma.exercise.findMany({
      orderBy: { exerciseNumber: "asc" },
      select: { id: true, exerciseNumber: true, title: true, isFree: true },
    });
  }

  /**
   * Retrieves a single exercise and its questions by ID.
   * This is used by the frontend to start a practice session.
   * @param exerciseId The ID of the exercise to fetch.
   */
  async getExerciseById(exerciseId: string) {
    const exercise = await prisma.exercise.findUnique({
      where: { id: exerciseId },
      include: {
        questions: {
          select: {
            id: true,
            text: true,
            options: true,
            hint: true,
            correctAnswerIndex: true,
          },
        },
      },
    });

    if (!exercise) {
      throw createHttpError(404, "Exercise not found.");
    }

    return exercise;
  }
}

export const exerciseService = new ExerciseService();
