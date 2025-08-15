import { Router } from "express";
import { adminController } from "./admin.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { requireRole } from "../../middleware/requireRole.js";
import { Role } from "@/prisma-client";
import { validate, getUsersQuerySchema } from "./admin.validators.js"; // NEW: Import validators

const router: Router = Router();

// Apply authentication AND role protection to ALL admin routes.
router.use(
  authenticate({ required: true }),
  requireRole([Role.SUPER_ADMIN, Role.DEVELOPER])
);

// --- Admin Routes ---
router.get("/stats", adminController.getDashboardStats);

// UPDATED: The /users route now uses the validation middleware
router.get(
  "/users",
  validate(getUsersQuerySchema),
  adminController.getAllUsers
);

router.delete("/users/:id", adminController.deleteUser);

export default router;
