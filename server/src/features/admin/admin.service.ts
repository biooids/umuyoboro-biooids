import prisma from "../../db/prisma.js";
import { Prisma } from "@/prisma-client";
import { AdminDashboardStats, AdminApiQuery } from "./admin.types.js";

// NEW: Define the shape of the user object we want to return
type AdminUserView = {
  id: string;
  username: string;
  phone: string;
  role: string;
  createdAt: Date;
};

class AdminService {
  public async getDashboardStats(): Promise<AdminDashboardStats> {
    const totalUsers = await prisma.user.count();
    return { totalUsers };
  }

  public async getAllUsers(
    query: AdminApiQuery
  ): Promise<{ users: AdminUserView[]; total: number }> {
    const {
      page = 1,
      limit = 10,
      q,
      sortBy = "createdAt",
      order = "desc",
    } = query;

    const where: Prisma.UserWhereInput = {};

    if (q) {
      where.OR = [
        { username: { contains: q, mode: "insensitive" } },
        { phone: { contains: q, mode: "insensitive" } },
      ];
    }

    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: order },
        // UPDATED: Select only the necessary, non-sensitive fields
        select: {
          id: true,
          username: true,
          phone: true,
          role: true,
          createdAt: true,
        },
      }),
      prisma.user.count({ where }),
    ]);

    return { users, total };
  }

  public async deleteUser(userId: string): Promise<void> {
    await prisma.user.delete({ where: { id: userId } });
  }
}

export const adminService = new AdminService();
