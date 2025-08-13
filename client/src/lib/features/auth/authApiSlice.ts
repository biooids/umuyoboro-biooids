// src/lib/features/auth/authApiSlice.ts

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../api/baseQueryWithReauth";
import { loggedOut, setCredentials } from "./authSlice";
import type {
  LoginInputDto,
  SignUpInputDto,
  LoginApiResponse,
} from "./authTypes";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<LoginApiResponse, LoginInputDto>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      // CHANGE: Add onQueryStarted to handle side-effects after the query completes.
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // On successful login, dispatch the user object and token to the auth slice.
          dispatch(
            setCredentials({
              user: data.data.user,
              token: data.data.accessToken,
            })
          );
        } catch (error) {
          // Errors are handled by the global error handler or component-level state.
          console.error("Login failed:", error);
        }
      },
    }),
    signup: builder.mutation<LoginApiResponse, SignUpInputDto>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
      // CHANGE: Add onQueryStarted here as well for signup.
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // On successful signup, also dispatch the credentials to log the user in.
          dispatch(
            setCredentials({
              user: data.data.user,
              token: data.data.accessToken,
            })
          );
        } catch (error) {
          console.error("Signup failed:", error);
        }
      },
    }),
    logout: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      // When the logout mutation starts, clear the local auth state immediately.
      // This provides a snappy UI response.
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // The `loggedOut` action is dispatched on success.
          dispatch(loggedOut());
        } catch (error) {
          // IMPORTANT: Also dispatch `loggedOut` even if the backend call fails.
          // This ensures the user is logged out on the client regardless of network issues.
          dispatch(loggedOut());
        }
      },
    }),
  }),
});

// Export the auto-generated hooks for use in UI components.
export const { useLoginMutation, useSignupMutation, useLogoutMutation } =
  authApiSlice;
