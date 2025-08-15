import { apiSlice } from "../../api/apiSlice";
import {
  AllExamsApiResponse,
  StartExamApiResponse,
  SubmitExamApiResponse,
  ExamHistoryApiResponse,
  ExamReviewApiResponse,
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

    // NEW: Add the lockAttempt mutation. This is a lightweight call
    // that marks the official end time on the server before submitting answers.
    lockAttempt: builder.mutation<
      { status: string; message: string },
      { attemptId: string }
    >({
      query: ({ attemptId }) => ({
        url: `/exams/attempts/${attemptId}/lock`,
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

    // --- History & Review Endpoints ---
    getExamHistory: builder.query<ExamHistoryApiResponse, void>({
      query: () => "/exams/history",
      providesTags: ["HistoryList"],
    }),
    getExamReview: builder.query<ExamReviewApiResponse, { attemptId: string }>({
      query: ({ attemptId }) => `/exams/history/${attemptId}`,
      providesTags: (_result, _error, { attemptId }) => [
        { type: "HistoryAttempt", id: attemptId },
      ],
    }),
  }),
});

// Export the new hook alongside the existing ones.
export const {
  useGetAllExamsQuery,
  useStartExamMutation,
  useLockAttemptMutation, // NEW: Export the hook for the lock mutation
  useSubmitExamMutation,
  useGetExamHistoryQuery,
  useGetExamReviewQuery,
} = examApiSlice;
