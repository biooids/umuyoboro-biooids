// src/features/exams/exam.controller.ts
import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { examService } from "./exam.service.js";

class ExamController {
  getAllExams = asyncHandler(async (_req: Request, res: Response) => {
    const exams = await examService.getAllExams();
    res.status(200).json({ status: "success", data: exams });
  });

  startExam = asyncHandler(async (req: Request, res: Response) => {
    const { id: examId } = req.params;
    const userId = req.user!.id;
    const userIsPaid = req.user!.isPaid; // <-- ADD THIS LINE BACK
    const result = await examService.startExam(examId, userId, userIsPaid); // <-- ADD userIsPaid BACK
    res.status(200).json({ status: "success", data: result });
  });
  submitExam = asyncHandler(async (req: Request, res: Response) => {
    const { attemptId } = req.params;
    const userId = req.user!.id;
    const result = await examService.submitExam(attemptId, req.body, userId);
    res.status(200).json({ status: "success", data: result });
  });
}

export const examController = new ExamController();
