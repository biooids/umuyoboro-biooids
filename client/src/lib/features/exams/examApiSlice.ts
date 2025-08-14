// src/lib/features/exams/examApiSlice.ts

import { apiSlice } from "../../api/apiSlice"; // CHANGE: Import the central apiSlice.
import {
  AllExamsApiResponse,
  StartExamApiResponse,
  SubmitExamApiResponse,
} from "./examTypes";

export const examApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
    }),
  }),
});

export const {
  useGetAllExamsQuery,
  useStartExamMutation,
  useSubmitExamMutation,
} = examApiSlice;
