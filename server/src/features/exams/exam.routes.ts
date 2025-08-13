// src/features/exams/exam.routes.ts
import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { examController } from "./exam.controller.js";

const router: Router = Router();

// All exam routes require a logged-in user
router.use(authenticate({ required: true }));

// GET /api/v1/exams - Get a list of all exams
router.get("/", examController.getAllExams);

// POST /api/v1/exams/:id/start - Start an exam, returns questions and an attempt ID
router.post("/:id/start", examController.startExam);

// POST /api/v1/exams/attempts/:attemptId/submit - Submit answers and get results
router.post("/attempts/:attemptId/submit", examController.submitExam);

export default router;
