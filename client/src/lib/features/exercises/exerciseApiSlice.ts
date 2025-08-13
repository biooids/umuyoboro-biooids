// src/lib/features/exercises/exerciseApiSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../api/baseQueryWithReauth";
import {
  AllExercisesApiResponse,
  SingleExerciseApiResponse,
} from "./exerciseTypes";

export const exerciseApiSlice = createApi({
  reducerPath: "exerciseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Exercises"],
  endpoints: (builder) => ({
    getAllExercises: builder.query<AllExercisesApiResponse, void>({
      query: () => "/exercises",
      providesTags: ["Exercises"],
    }),
    getExerciseById: builder.query<
      SingleExerciseApiResponse,
      { exerciseId: string }
    >({
      query: ({ exerciseId }) => `/exercises/${exerciseId}`,
    }),
  }),
});

export const { useGetAllExercisesQuery, useGetExerciseByIdQuery } =
  exerciseApiSlice;
