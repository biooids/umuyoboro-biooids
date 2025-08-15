// Query parameters for the admin user list endpoint
export interface AdminApiQuery {
  // UPDATED: All optional fields now explicitly allow 'undefined'
  // This makes the type compatible with the output from your Zod schema.
  page?: number | undefined;
  limit?: number | undefined;
  q?: string | undefined;
  sortBy?: "username" | "createdAt" | undefined;
  order?: "asc" | "desc" | undefined;
}

// The basic stats for the admin dashboard
export interface AdminDashboardStats {
  totalUsers: number;
}
