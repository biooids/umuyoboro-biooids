// src/lib/api/apiSlice.ts

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

/**
 * This is the central "root" API slice.
 * All other feature-specific API slices will inject their endpoints into this one.
 * It is configured with the base query and defines the master list of tag types
 * used for caching and invalidation across the entire application.
 */
export const apiSlice = createApi({
  // The reducerPath is the key where this slice's state will be stored in the Redux store.
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  // Define the tag types that can be used to invalidate and refetch data.
  tagTypes: ["User", "Exam", "Exercise"],
  // The `endpoints` section is intentionally left empty.
  // Endpoints will be added from other files using `injectEndpoints`.
  endpoints: (builder) => ({}),
});
