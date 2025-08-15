import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.js";
import { examController } from "./exam.controller.js";

const router: Router = Router();

// All exam-related routes require authentication.
router.use(authenticate({ required: true }));

// --- Exam Listing ---
// GET /api/v1/exams
router.get("/", examController.getAllExams);

// --- Exam Lifecycle ---
// POST /api/v1/exams/:id/start
router.post("/:id/start", examController.startExam);

// POST /api/v1/exams/attempts/:attemptId/lock
router.post("/attempts/:attemptId/lock", examController.lockAttempt);

// POST /api/v1/exams/attempts/:attemptId/submit
router.post("/attempts/:attemptId/submit", examController.submitExam);

// --- Exam History and Review ---
// GET /api/v1/exams/history
router.get("/history", examController.getExamHistory);

// GET /api/v1/exams/history/:attemptId
router.get("/history/:attemptId", examController.getExamReview);

export default router;
