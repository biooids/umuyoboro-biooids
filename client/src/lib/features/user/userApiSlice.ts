// src/lib/features/user/userApiSlice.ts

import { apiSlice } from "../../api/apiSlice"; // CHANGE: Import the central apiSlice.
import { setCredentials, loggedOut } from "../auth/authSlice";
import type { UserUpdateInputDto, UserProfileApiResponse } from "./userTypes";
import { RootState } from "@/lib/store";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfileApiResponse, void>({
      query: () => "/users/me",
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation<UserProfileApiResponse, UserUpdateInputDto>(
      {
        query: (credentials) => ({
          url: "/users/me",
          method: "PATCH",
          body: credentials,
        }),

        async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
          try {
            const { data } = await queryFulfilled;
            const currentToken = (getState() as RootState).auth.token;
            if (!currentToken) {
              // This case should not be reachable for an authenticated user
              throw new Error(
                "User is not authenticated, cannot update profile."
              );
            }
            dispatch(
              setCredentials({
                user: data.data.user,
                token: currentToken,
              })
            );
          } catch (error) {
            console.error("Profile update failed:", error);
          }
        },
        invalidatesTags: ["User"],
      }
    ),
    deleteAccount: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/users/me",
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } finally {
          dispatch(loggedOut());
        }
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteAccountMutation,
} = userApiSlice;
