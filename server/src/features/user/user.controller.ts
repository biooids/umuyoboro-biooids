// src/features/user/user.controller.ts

import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { userService } from "./user.service.js";
import { config } from "../../config/index.js";

/**
 * The UserController handles HTTP requests related to user profile management.
 * It relies on the UserService to perform the underlying business logic.
 */
class UserController {
  /**
   * Handles the request to get the current user's profile.
   */
  getProfile = asyncHandler(async (req: Request, res: Response) => {
    // The user's ID is attached to the request by the `authenticate` middleware.
    const userId = req.user!.id;
    const user = await userService.getOwnProfile(userId);

    res.status(200).json({
      status: "success",
      data: { user },
    });
  });

  /**
   * Handles the request to update the current user's profile.
   */
  updateProfile = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const updatedUser = await userService.updateOwnProfile(userId, req.body);

    res.status(200).json({
      status: "success",
      message: "Profile updated successfully.",
      data: { user: updatedUser },
    });
  });

  /**
   * Handles the request to delete the current user's account.
   */
  deleteAccount = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user!.id;
    await userService.deleteOwnAccount(userId);

    // After deleting the account, clear the refresh token cookie from the browser.
    res.clearCookie(config.cookies.refreshTokenName);

    res.status(200).json({
      status: "success",
      message: "Your account has been permanently deleted.",
    });
  });
}

export const userController = new UserController();
