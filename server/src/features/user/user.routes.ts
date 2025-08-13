// src/features/user/user.routes.ts

import { Router } from "express";
import { userController } from "./user.controller.js";
import { validate } from "../../middleware/validate.js";
import { updateUserSchema } from "./user.validation.js";

const router: Router = Router();

/**
 * Defines the API routes for user profile management.
 * All routes in this file are protected and require the user to be authenticated.
 * The `authenticate` middleware is applied in the main `apiRoutes.ts` file.
 */

// Route to get the current user's profile information.
router.get("/me", userController.getProfile);

// Route to update the current user's profile. It validates the request body.
router.patch("/me", validate(updateUserSchema), userController.updateProfile);

// Route to permanently delete the current user's account.
router.delete("/me", userController.deleteAccount);

export default router;
