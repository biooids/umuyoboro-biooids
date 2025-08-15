import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { examService } from "./exam.service.js";

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
    const userId = req.user!.id;
    const userIsPaid = req.user!.isPaid;

    const result = await examService.startExam(examId, userId, userIsPaid);
    res.status(200).json({ status: "success", data: result });
  });

  /**
   * Handles the request to lock an exam attempt, marking the official end time.
   */
  lockAttempt = asyncHandler(async (req: Request, res: Response) => {
    const { attemptId } = req.params;
    const userId = req.user!.id;
    await examService.lockAttempt(attemptId, userId);
    res.status(200).json({ status: "success", message: "Attempt locked." });
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

  /**
   * Handles the request to get the current user's exam history.
   */
  getExamHistory = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const history = await examService.getExamHistory(userId);
    res.status(200).json({ status: "success", data: history });
  });

  /**
   * Handles the request to get the details of a single past exam attempt.
   */
  getExamReview = asyncHandler(async (req: Request, res: Response) => {
    const { attemptId } = req.params;
    const userId = req.user!.id;
    const reviewData = await examService.getExamReview(attemptId, userId);
    res.status(200).json({ status: "success", data: reviewData });
  });
}

export const examController = new ExamController();
