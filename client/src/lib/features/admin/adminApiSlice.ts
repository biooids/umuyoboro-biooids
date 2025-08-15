import { apiSlice } from "../../api/apiSlice";
import {
  AdminApiQuery,
  GetAdminStatsResponse,
  GetAdminUsersResponse,
} from "./adminTypes";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query<GetAdminStatsResponse, void>({
      query: () => "/admin/stats",
      providesTags: ["AdminStats"],
    }),
    getAdminUsers: builder.query<GetAdminUsersResponse, AdminApiQuery>({
      query: (args) => {
        const params = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          // THIS IS THE FIX: Add a check for empty strings (value !== '')
          // This ensures the 'q' param is only added if it has a real value.
          if (value !== undefined && value !== null && value !== "") {
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
      invalidatesTags: ["AdminUsers", "AdminStats"],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetAdminUsersQuery,
  useDeleteUserMutation,
} = adminApiSlice;
