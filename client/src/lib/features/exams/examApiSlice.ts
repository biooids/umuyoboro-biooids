// src/lib/features/exams/examApiSlice.ts

import { apiSlice } from "../../api/apiSlice";
import {
  AllExamsApiResponse,
  StartExamApiResponse,
  SubmitExamApiResponse,
  ExamHistoryApiResponse, // NEW
  ExamReviewApiResponse, // NEW
} from "./examTypes";

export const examApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // --- Core Exam Taking Endpoints ---
    getAllExams: builder.query<AllExamsApiResponse, void>({
      query: () => "/exams",
      providesTags: ["Exam"],
    }),
    startExam: builder.mutation<StartExamApiResponse, { examId: string }>({
      query: ({ examId }) => ({
        url: `/exams/${examId}/start`,
        method: "POST",
      }),
    }),
    submitExam: builder.mutation<
      SubmitExamApiResponse,
      { attemptId: string; answers: Record<string, number> }
    >({
      query: ({ attemptId, answers }) => ({
        url: `/exams/attempts/${attemptId}/submit`,
        method: "POST",
        body: { answers },
      }),
      // After submitting an exam, invalidate the history list to force a refetch.
      invalidatesTags: ["HistoryList"],
    }),

    // --- NEW HISTORY & REVIEW ENDPOINTS ---

    /**
     * A "query" endpoint to fetch the list of the user's past exam attempts.
     */
    getExamHistory: builder.query<ExamHistoryApiResponse, void>({
      query: () => "/exams/history",
      providesTags: ["HistoryList"], // This query provides the 'HistoryList' tag.
    }),

    /**
     * A "query" endpoint to fetch the detailed results of a single past attempt.
     */
    getExamReview: builder.query<ExamReviewApiResponse, { attemptId: string }>({
      query: ({ attemptId }) => `/exams/history/${attemptId}`,
      providesTags: (result, error, { attemptId }) => [
        { type: "HistoryAttempt", id: attemptId },
      ],
    }),
  }),
});

// Export the new hooks alongside the existing ones.
export const {
  useGetAllExamsQuery,
  useStartExamMutation,
  useSubmitExamMutation,
  useGetExamHistoryQuery, // NEW
  useGetExamReviewQuery, // NEW
} = examApiSlice;
