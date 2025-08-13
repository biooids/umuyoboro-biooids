// src/features/exercises/exercise.routes.ts
import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { exerciseController } from "./exercise.controller.js";

const router: Router = Router();

// All exercise routes require a logged-in user
router.use(authenticate({ required: true }));

// GET /api/v1/exercises - Get a list of all exercises
router.get("/", exerciseController.getAllExercises);

// GET /api/v1/exercises/:id - Get a specific exercise with its questions and answers
router.get("/:id", exerciseController.getExerciseById);

export default router;
