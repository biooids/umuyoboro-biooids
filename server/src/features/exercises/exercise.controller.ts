import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { exerciseService } from "./exercise.service.js";

class ExerciseController {
  /**
   * Gets a list of all exercises.
   */
  getAllExercises = asyncHandler(async (_req: Request, res: Response) => {
    const exercises = await exerciseService.getAllExercises();
    res.status(200).json({ status: "success", data: exercises });
  });

  /**
   * Gets a single exercise by its ID, including all its questions.
   */
  getExerciseById = asyncHandler(async (req: Request, res: Response) => {
    const { id: exerciseId } = req.params;
    const exercise = await exerciseService.getExerciseById(exerciseId);
    res.status(200).json({ status: "success", data: exercise });
  });
}

export const exerciseController = new ExerciseController();
