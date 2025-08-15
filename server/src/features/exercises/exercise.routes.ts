import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { exerciseController } from "./exercise.controller.js";

const router: Router = Router();

router.use(authenticate({ required: true }));

// GET /api/v1/exercises - Gets the list of all exercises
router.get("/", exerciseController.getAllExercises);

// GET /api/v1/exercises/:id - Gets the data for a single exercise
router.get("/:id", exerciseController.getExerciseById);

export default router;
