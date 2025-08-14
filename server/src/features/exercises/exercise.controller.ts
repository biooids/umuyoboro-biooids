// src/features/exercises/exercise.controller.ts

import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { exerciseService } from "./exercise.service.js";

class ExerciseController {
  getAllExercises = asyncHandler(async (_req: Request, res: Response) => {
    const exercises = await exerciseService.getAllExercises();
    res.status(200).json({ status: "success", data: exercises });
  });

  // --- NEW STATEFUL CONTROLLERS ---
  startExercise = asyncHandler(async (req: Request, res: Response) => {
    const { exerciseId } = req.params;
    const userId = req.user!.id;
    const result = await exerciseService.startExercise(exerciseId, userId);
    res.status(200).json({ status: "success", data: result });
  });

  submitAnswer = asyncHandler(async (req: Request, res: Response) => {
    const { attemptId } = req.params;
    const userId = req.user!.id;
    const result = await exerciseService.submitAnswer(
      attemptId,
      req.body,
      userId
    );
    res.status(200).json({ status: "success", data: result });
  });

  finalizeExercise = asyncHandler(async (req: Request, res: Response) => {
    const { attemptId } = req.params;
    const userId = req.user!.id;
    const result = await exerciseService.finalizeExercise(attemptId, userId);
    res.status(200).json({ status: "success", data: result });
  });

  // --- NEW HISTORY CONTROLLERS ---
  getExerciseHistory = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const history = await exerciseService.getExerciseHistory(userId);
    res.status(200).json({ status: "success", data: history });
  });

  getExerciseReview = asyncHandler(async (req: Request, res: Response) => {
    const { attemptId } = req.params;
    const userId = req.user!.id;
    const reviewData = await exerciseService.getExerciseReview(
      attemptId,
      userId
    );
    res.status(200).json({ status: "success", data: reviewData });
  });
}

export const exerciseController = new ExerciseController();
