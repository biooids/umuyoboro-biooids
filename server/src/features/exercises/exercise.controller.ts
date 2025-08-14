// src/features/exercises/exercise.controller.ts

import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { exerciseService } from "./exercise.service.js";

/**
 * The ExerciseController handles the HTTP layer for exercise-related requests.
 * It calls the ExerciseService to perform the business logic and formats the
 * JSON response to be sent back to the client.
 */
class ExerciseController {
  /**
   * Handles the request to get a list of all exercises.
   */
  getAllExercises = asyncHandler(async (_req: Request, res: Response) => {
    const exercises = await exerciseService.getAllExercises();
    res.status(200).json({ status: "success", data: exercises });
  });

  /**
   * Handles the request to get a single exercise by its ID.
   */
  getExerciseById = asyncHandler(async (req: Request, res: Response) => {
    const { id: exerciseId } = req.params;
    // The user object is guaranteed to be on the request because the `authenticate`
    // middleware has already run and verified the user.
    const userIsPaid = req.user!.isPaid;

    const exercise = await exerciseService.getExerciseById(
      exerciseId,
      userIsPaid
    );
    res.status(200).json({ status: "success", data: exercise });
  });
}

export const exerciseController = new ExerciseController();
