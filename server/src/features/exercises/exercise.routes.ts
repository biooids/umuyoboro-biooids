// src/features/exercises/exercise.routes.ts

import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { exerciseController } from "./exercise.controller.js";

const router: Router = Router();

router.use(authenticate({ required: true }));

// GET /api/v1/exercises - (Remains the same)
router.get("/", exerciseController.getAllExercises);

// --- NEW STATEFUL AND HISTORY ROUTES ---

// POST /api/v1/exercises/:exerciseId/start
router.post("/:exerciseId/start", exerciseController.startExercise);

// POST /api/v1/exercises/attempts/:attemptId/submit-answer
router.post(
  "/attempts/:attemptId/submit-answer",
  exerciseController.submitAnswer
);

// POST /api/v1/exercises/attempts/:attemptId/finalize
router.post(
  "/attempts/:attemptId/finalize",
  exerciseController.finalizeExercise
);

// GET /api/v1/exercises/history
router.get("/history", exerciseController.getExerciseHistory);

// GET /api/v1/exercises/history/:attemptId
router.get("/history/:attemptId", exerciseController.getExerciseReview);

export default router;
