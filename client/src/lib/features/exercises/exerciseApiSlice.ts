import { apiSlice } from "../../api/apiSlice";
import {
  AllExercisesApiResponse,
  ExerciseByIdApiResponse,
} from "./exerciseTypes";

export const exerciseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * A query to fetch the list of all available exercises.
     */
    getAllExercises: builder.query<AllExercisesApiResponse, void>({
      query: () => "/exercises",
      providesTags: ["Exercise"],
    }),

    /**
     * A query to fetch the data for a single exercise, including its questions.
     * This replaces the old `startExercise` mutation.
     */
    getExerciseById: builder.query<
      ExerciseByIdApiResponse,
      { exerciseId: string }
    >({
      query: ({ exerciseId }) => `/exercises/${exerciseId}`,
      // We can tag this specific exercise instance if needed later
      providesTags: (_result, _error, { exerciseId }) => [
        { type: "Exercise", id: exerciseId },
      ],
    }),
  }),
});

// Export the new, simplified hooks.
export const { useGetAllExercisesQuery, useGetExerciseByIdQuery } =
  exerciseApiSlice;
