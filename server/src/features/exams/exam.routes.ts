// src/features/exams/exam.routes.ts

import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { examController } from "./exam.controller.js";

const router: Router = Router();

/**
 * Defines all API routes related to exams.
 * A middleware is used at the top level to ensure all endpoints
 * in this file require the user to be authenticated.
 */

// All routes defined below will first pass through the `authenticate` middleware.
router.use(authenticate({ required: true }));

// GET /api/v1/exams
// Retrieves a list of all available exams.
router.get("/", examController.getAllExams);

// POST /api/v1/exams/:id/start
// Starts an exam attempt for the user and returns the questions.
router.post("/:id/start", examController.startExam);

// POST /api/v1/exams/attempts/:attemptId/submit
// Submits a user's answers for a specific attempt and returns the results.
router.post("/attempts/:attemptId/submit", examController.submitExam);

export default router;
