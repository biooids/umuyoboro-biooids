// src/features/admin/admin.service.ts

import prisma from "../../db/prisma.js";
import { Prisma, User } from "@/prisma-client";
import { AdminDashboardStats, AdminApiQuery } from "./admin.types.js";

class AdminService {
  /**
   * Gets basic statistics for the admin dashboard.
   */
  public async getDashboardStats(): Promise<AdminDashboardStats> {
    const totalUsers = await prisma.user.count();
    return { totalUsers };
  }

  /**
   * Gets a paginated and searchable list of all users.
   */
  public async getAllUsers(
    query: AdminApiQuery
  ): Promise<{ users: User[]; total: number }> {
    const {
      page = 1,
      limit = 10,
      q, // search query
      sortBy = "createdAt",
      order = "desc",
    } = query;

    const where: Prisma.UserWhereInput = {};

    // If a search query is provided, search the username and phone fields
    if (q) {
      where.OR = [
        { username: { contains: q, mode: "insensitive" } },
        { phone: { contains: q, mode: "insensitive" } },
      ];
    }

    // Use a transaction to fetch users and the total count in one go
    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: order },
      }),
      prisma.user.count({ where }),
    ]);

    return { users, total };
  }

  /**
   * Deletes a user by their ID.
   */
  public async deleteUser(userId: string): Promise<void> {
    // This will also cascade and delete related refresh tokens
    await prisma.user.delete({ where: { id: userId } });
  }
}

export const adminService = new AdminService();
