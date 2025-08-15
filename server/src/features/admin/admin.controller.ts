import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { adminService } from "./admin.service.js";
import { createHttpError } from "../../utils/error.factory.js";
import { getUsersQuerySchema } from "./admin.validators.js";

class AdminController {
  // GET /admin/stats
  getDashboardStats = asyncHandler(async (_req: Request, res: Response) => {
    const stats = await adminService.getDashboardStats();
    res.status(200).json({ status: "success", data: stats });
  });

  // GET /admin/users
  getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    // This line correctly parses the incoming query and gives it strong types.
    const validatedQuery = getUsersQuerySchema.parse(req.query);

    const { users, total } = await adminService.getAllUsers(validatedQuery);

    const { page, limit } = validatedQuery;

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
