// src/lib/features/exams/examApiSlice.ts

import { apiSlice } from "../../api/apiSlice"; // Import the central root API slice
import {
  AllExamsApiResponse,
  StartExamApiResponse,
  SubmitExamApiResponse,
} from "./examTypes";

/**
 * This API slice is dedicated to all API interactions related to exams.
 * It injects its endpoints into the central `apiSlice`.
 */
export const examApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * A "query" endpoint to fetch the list of all available exams.
     * RTK Query will automatically handle caching for this data.
     */
    getAllExams: builder.query<AllExamsApiResponse, void>({
      query: () => "/exams",
      // Associates this query's cached data with an "Exams" tag.
      // If another mutation invalidates this tag, this query will be re-run automatically.
      providesTags: ["Exam"],
    }),

    /**
     * A "mutation" endpoint to start an exam.
     * Use this for any action that changes data on the server.
     */
    startExam: builder.mutation<StartExamApiResponse, { examId: string }>({
      query: ({ examId }) => ({
        url: `/exams/${examId}/start`,
        method: "POST",
      }),
    }),

    /**
     * A "mutation" endpoint to submit a completed exam attempt for grading.
     */
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

// Export the auto-generated hooks for use in UI components.
// These hooks encapsulate the entire data-fetching process,
// including loading, error, and success states.
export const {
  useGetAllExamsQuery,
  useStartExamMutation,
  useSubmitExamMutation,
} = examApiSlice;
