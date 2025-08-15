import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { adminService } from "./admin.service.js";
import { createHttpError } from "../../utils/error.factory.js";

class AdminController {
  // GET /admin/stats
  getDashboardStats = asyncHandler(async (_req: Request, res: Response) => {
    const stats = await adminService.getDashboardStats();
    res.status(200).json({ status: "success", data: stats });
  });

  // GET /admin/users
  getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    // --- THIS IS THE FIX ---
    // Read from the type-safe req.validatedData property provided by the middleware.
    // No more type casting is needed! ✨
    const query = req.validatedData!;

    const { users, total } = await adminService.getAllUsers(query);
    const { page, limit } = query;

    res.status(200).json({
      status: "success",
      data: {
        users,
        pagination: {
          totalItems: total,
          totalPages: Math.ceil(total / limit),
          currentPage: page,
        },
      },
    });
  });

  // DELETE /admin/users/:id
  deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const { id: userIdToDelete } = req.params;

    if (req.user?.id === userIdToDelete) {
      throw createHttpError(400, "Admins cannot delete their own account.");
    }
    await adminService.deleteUser(userIdToDelete);
    res.status(204).send();
  });
}

export const adminController = new AdminController();
