import { apiSlice } from "../../api/apiSlice"; // <-- Import the main apiSlice
import {
  AdminApiQuery,
  GetAdminStatsResponse,
  GetAdminUsersResponse,
} from "./adminTypes";

// UPDATED: Changed from 'createApi' to 'apiSlice.injectEndpoints'
export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query<GetAdminStatsResponse, void>({
      query: () => "/admin/stats",
      providesTags: ["AdminStats"],
    }),
    getAdminUsers: builder.query<GetAdminUsersResponse, AdminApiQuery>({
      query: (args) => {
        const params = new URLSearchParams();
        // This logic correctly handles optional/undefined values
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, String(value));
          }
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
    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({ url: `/admin/users/${userId}`, method: "DELETE" }),
      // Correctly invalidates both tags to trigger refetches
      invalidatesTags: ["AdminUsers", "AdminStats"],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetAdminUsersQuery,
  useDeleteUserMutation,
} = adminApiSlice;
