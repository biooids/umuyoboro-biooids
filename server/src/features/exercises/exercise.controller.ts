// src/features/exercises/exercise.controller.ts
import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { exerciseService } from "./exercise.service.js";

class ExerciseController {
  getAllExercises = asyncHandler(async (_req: Request, res: Response) => {
    const exercises = await exerciseService.getAllExercises();
    res.status(200).json({ status: "success", data: exercises });
  });

  getExerciseById = asyncHandler(async (req: Request, res: Response) => {
    const { id: exerciseId } = req.params;
    const userIsPaid = req.user!.isPaid; // We get this for future use
    const exercise = await exerciseService.getExerciseById(
      exerciseId,
      userIsPaid
    );
    res.status(200).json({ status: "success", data: exercise });
  });
}

export const exerciseController = new ExerciseController();
