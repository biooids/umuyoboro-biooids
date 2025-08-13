// src/lib/features/exams/examApiSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../api/baseQueryWithReauth";
import {
  AllExamsApiResponse,
  StartExamApiResponse,
  SubmitExamApiResponse,
} from "./examTypes";

export const examApiSlice = createApi({
  reducerPath: "examApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Exams", "ExamAttempt"],
  endpoints: (builder) => ({
    getAllExams: builder.query<AllExamsApiResponse, void>({
      query: () => "/exams",
      providesTags: ["Exams"],
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
