// src/lib/features/exercises/exerciseApiSlice.ts

import { apiSlice } from "../../api/apiSlice"; // CHANGE: Import the central apiSlice.
import {
  AllExercisesApiResponse,
  SingleExerciseApiResponse,
} from "./exerciseTypes";

export const exerciseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllExercises: builder.query<AllExercisesApiResponse, void>({
      query: () => "/exercises",
      providesTags: ["Exercise"],
    }),
    getExerciseById: builder.query<
      SingleExerciseApiResponse,
      { exerciseId: string }
    >({
      query: ({ exerciseId }) => `/exercises/${exerciseId}`,
      providesTags: (result, error, { exerciseId }) => [
        { type: "Exercise", id: exerciseId },
      ],
    }),
  }),
});

export const { useGetAllExercisesQuery, useGetExerciseByIdQuery } =
  exerciseApiSlice;
