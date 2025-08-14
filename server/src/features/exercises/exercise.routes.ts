// src/features/exercises/exercise.routes.ts

import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { exerciseController } from "./exercise.controller.js";

const router: Router = Router();

/**
 * Defines all API routes related to exercises.
 * All endpoints in this file are protected and require the user to be authenticated.
 */

// This middleware ensures that a user must be logged in to access any exercise routes.
router.use(authenticate({ required: true }));

// GET /api/v1/exercises
// Retrieves a list of all available exercises.
router.get("/", exerciseController.getAllExercises);

// GET /api/v1/exercises/:id
// Retrieves a single, specific exercise by its ID, including all its questions and answers.
router.get("/:id", exerciseController.getExerciseById);

export default router;
