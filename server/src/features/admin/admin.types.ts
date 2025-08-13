// src/features/admin/admin.types.ts

// The basic stats for the admin dashboard
export interface AdminDashboardStats {
  totalUsers: number;
}

// The shape of a user object as returned by the admin API
export interface AdminUserRow {
  id: string;
  username: string;
  phone: string;
  createdAt: Date;
}

// Query parameters for the admin user list endpoint
export interface AdminApiQuery {
  page?: number;
  limit?: number;
  q?: string; // for searching
  sortBy?: "username" | "createdAt";
  order?: "asc" | "desc";
}

// The shape of the pagination object returned by the API
export interface PaginationInfo {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}
