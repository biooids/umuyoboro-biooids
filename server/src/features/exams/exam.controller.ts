// src/features/exams/exam.controller.ts

import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { examService } from "./exam.service.js";

/**
 * The ExamController handles the HTTP layer for exam-related requests.
 * It receives requests, calls the appropriate service method to perform
 * the business logic, and formats the JSON response.
 */
class ExamController {
  /**
   * Handles the request to get a list of all exams.
   */
  getAllExams = asyncHandler(async (_req: Request, res: Response) => {
    const exams = await examService.getAllExams();
    res.status(200).json({ status: "success", data: exams });
  });

  /**
   * Handles the request to start a new exam attempt.
   */
  startExam = asyncHandler(async (req: Request, res: Response) => {
    const { id: examId } = req.params;
    // The user object is guaranteed to be on the request object because
    // the `authenticate({ required: true })` middleware has already run.
    const userId = req.user!.id;
    const userIsPaid = req.user!.isPaid;

    const result = await examService.startExam(examId, userId, userIsPaid);
    res.status(200).json({ status: "success", data: result });
  });

  /**
   * Handles the request to submit answers for an exam attempt.
   */
  submitExam = asyncHandler(async (req: Request, res: Response) => {
    const { attemptId } = req.params;
    const userId = req.user!.id;

    const result = await examService.submitExam(attemptId, req.body, userId);
    res.status(200).json({ status: "success", data: result });
  });
}

export const examController = new ExamController();
