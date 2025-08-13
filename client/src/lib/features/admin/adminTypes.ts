// src/lib/features/admin/adminTypes.ts

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
export interface AdminApiQuery {
  page?: number;
  limit?: number;
  q?: string;
  sortBy?: "username" | "createdAt";
  order?: "asc" | "desc";
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
