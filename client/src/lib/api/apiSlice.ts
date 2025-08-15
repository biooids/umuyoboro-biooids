import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  // UPDATED: Added tags for the admin feature
  tagTypes: [
    "User",
    "Exam",
    "Exercise",
    "HistoryList",
    "HistoryAttempt",
    "ExerciseHistoryList",
    "ExerciseHistoryAttempt",
    "AdminStats", // NEW
    "AdminUsers", // NEW
  ],
  endpoints: (builder) => ({}),
});
