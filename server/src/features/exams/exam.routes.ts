// src/features/exams/exam.routes.ts

import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { examController } from "./exam.controller.js";

const router: Router = Router();

router.use(authenticate({ required: true }));

// --- Core Exam Routes ---
router.get("/", examController.getAllExams);
router.post("/:id/start", examController.startExam);
router.post("/attempts/:attemptId/submit", examController.submitExam);

// --- NEW HISTORY AND REVIEW ROUTES ---
router.get("/history", examController.getExamHistory);
router.get("/history/:attemptId", examController.getExamReview);

export default router;
