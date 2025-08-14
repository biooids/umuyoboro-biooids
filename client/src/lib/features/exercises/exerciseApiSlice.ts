// src/lib/features/exercises/exerciseApiSlice.ts

import { apiSlice } from "../../api/apiSlice";
import {
  AllExercisesApiResponse,
  StartExerciseApiResponse,
  SubmitAnswerApiResponse,
  FinalizeExerciseApiResponse,
  SubmitAnswerInputDto,
  ExerciseHistoryApiResponse,
  ExerciseReviewApiResponse,
} from "./exerciseTypes";

export const exerciseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // This query to get the list remains the same.
    getAllExercises: builder.query<AllExercisesApiResponse, void>({
      query: () => "/exercises",
      providesTags: ["Exercise"],
    }),

    // --- NEW STATEFUL ENDPOINTS ---

    startExercise: builder.mutation<
      StartExerciseApiResponse,
      { exerciseId: string }
    >({
      query: ({ exerciseId }) => ({
        url: `/exercises/${exerciseId}/start`,
        method: "POST",
      }),
    }),

    submitAnswer: builder.mutation<
      SubmitAnswerApiResponse,
      { attemptId: string; answerData: SubmitAnswerInputDto }
    >({
      query: ({ attemptId, answerData }) => ({
        url: `/exercises/attempts/${attemptId}/submit-answer`,
        method: "POST",
        body: answerData,
      }),
    }),

    finalizeExercise: builder.mutation<
      FinalizeExerciseApiResponse,
      { attemptId: string }
    >({
      query: ({ attemptId }) => ({
        url: `/exercises/attempts/${attemptId}/finalize`,
        method: "POST",
      }),
      invalidatesTags: ["ExerciseHistoryList"],
    }),

    // --- NEW HISTORY ENDPOINTS ---
    getExerciseHistory: builder.query<ExerciseHistoryApiResponse, void>({
      query: () => "/exercises/history",
      providesTags: ["ExerciseHistoryList"],
    }),

    getExerciseReview: builder.query<
      ExerciseReviewApiResponse,
      { attemptId: string }
    >({
      query: ({ attemptId }) => `/exercises/history/${attemptId}`,
      providesTags: (result, error, { attemptId }) => [
        { type: "ExerciseHistoryAttempt", id: attemptId },
      ],
    }),
  }),
});

export const {
  useGetAllExercisesQuery,
  useStartExerciseMutation,
  useSubmitAnswerMutation,
  useFinalizeExerciseMutation,
  useGetExerciseHistoryQuery,
  useGetExerciseReviewQuery,
} = exerciseApiSlice;
