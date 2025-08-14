// src/lib/api/apiSlice.ts

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  // CHANGE: Add the new tags for exercise history.
  tagTypes: [
    "User",
    "Exam",
    "Exercise",
    "HistoryList",
    "HistoryAttempt",
    "ExerciseHistoryList",
    "ExerciseHistoryAttempt",
  ],
  endpoints: (builder) => ({}),
});
