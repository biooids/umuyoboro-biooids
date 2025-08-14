// src/lib/api/apiSlice.ts

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

/**
 * This is the central "root" API slice.
 * All other API slices will inject their endpoints into this one.
 * It is configured with the base query and defines the tag types used for caching.
 * The `endpoints` section is intentionally left empty as endpoints will be added via injection.
 */
export const apiSlice = createApi({
  reducerPath: "api", // A single reducer path for the entire API.
  baseQuery: baseQueryWithReauth,
  // Define the tag types that will be used for caching and invalidation across the app.
  tagTypes: ["User", "Exam", "Exercise"],
  endpoints: (builder) => ({}), // Endpoints are injected in other files.
});
