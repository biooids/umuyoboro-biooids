// src/lib/features/user/userApiSlice.ts

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../api/baseQueryWithReauth";
import { setCredentials, loggedOut } from "../auth/authSlice";
import type { UserUpdateInputDto, UserProfileApiResponse } from "./userTypes";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  // Tag types are used for caching and invalidation.
  tagTypes: ["User"],
  endpoints: (builder) => ({
    /**
     * Query to get the current authenticated user's profile.
     */
    getProfile: builder.query<UserProfileApiResponse, void>({
      query: () => "/users/me",
      providesTags: ["User"], // This query provides a 'User' tag.
    }),

    /**
     * Mutation to update the current user's profile.
     */
    updateProfile: builder.mutation<UserProfileApiResponse, UserUpdateInputDto>(
      {
        query: (credentials) => ({
          url: "/users/me",
          method: "PATCH",
          body: credentials,
        }),
        // After the mutation succeeds, we want to update the user data in the auth slice.
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            // Dispatch `setCredentials` to update the user object in the global state.
            // We pass the existing token back to itself to avoid clearing it.
            dispatch(
              setCredentials({
                user: data.data.user,
                token: (
                  (await dispatch(userApiSlice.endpoints.getProfile.initiate()))
                    .data?.data.user as any
                )?.token,
              })
            );
          } catch (error) {
            console.error("Profile update failed:", error);
          }
        },
        // Invalidate the 'User' tag to force a refetch of the user's profile data.
        invalidatesTags: ["User"],
      }
    ),

    /**
     * Mutation to permanently delete the current user's account.
     */
    deleteAccount: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/users/me",
        method: "DELETE",
      }),
      // After the delete mutation is initiated, log the user out on the client immediately.
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(loggedOut());
        } catch (error) {
          // Even if the backend call fails, log the user out on the client.
          dispatch(loggedOut());
        }
      },
    }),
  }),
});

// Export the auto-generated hooks.
export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteAccountMutation,
} = userApiSlice;
