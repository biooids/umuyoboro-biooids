// src/lib/features/admin/adminApiSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../api/baseQueryWithReauth";
import {
  AdminApiQuery,
  GetAdminStatsResponse,
  GetAdminUsersResponse,
} from "./adminTypes";

export const adminApiSlice = createApi({
  reducerPath: "adminApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["AdminStats", "AdminUsers"],
  endpoints: (builder) => ({
    getDashboardStats: builder.query<GetAdminStatsResponse, void>({
      query: () => "/admin/stats",
      providesTags: ["AdminStats"],
    }),
    getAdminUsers: builder.query<GetAdminUsersResponse, AdminApiQuery>({
      query: (args) => {
        const params = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value) params.append(key, String(value));
        });
        return `/admin/users?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.users.map(({ id }) => ({
                type: "AdminUsers" as const,
                id,
              })),
              { type: "AdminUsers", id: "LIST" },
            ]
          : [{ type: "AdminUsers", id: "LIST" }],
    }),
    deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
      query: (userId) => ({ url: `/admin/users/${userId}`, method: "DELETE" }),
      invalidatesTags: ["AdminUsers", "AdminStats"],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetAdminUsersQuery,
  useDeleteUserMutation,
} = adminApiSlice;
