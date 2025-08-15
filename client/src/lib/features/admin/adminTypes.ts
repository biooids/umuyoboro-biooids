import { Role } from "@/types/role.enum";

// --- Data Shapes ---
export interface AdminDashboardStats {
  totalUsers: number;
}

export interface AdminUserRow {
  id: string;
  username: string;
  phone: string;
  role: Role;
  createdAt: string; // ISO date string
}

// --- API Query Arguments ---
// UPDATED: All optional fields now explicitly allow 'undefined' for stricter type safety.
export interface AdminApiQuery {
  page?: number | undefined;
  limit?: number | undefined;
  q?: string | undefined;
  sortBy?: "username" | "createdAt" | undefined;
  order?: "asc" | "desc" | undefined;
}

// --- Full API Response Shapes ---
export interface PaginationInfo {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export interface GetAdminStatsResponse {
  status: string;
  data: AdminDashboardStats;
}

export interface GetAdminUsersResponse {
  status: string;
  data: {
    users: AdminUserRow[];
    pagination: PaginationInfo;
  };
}
