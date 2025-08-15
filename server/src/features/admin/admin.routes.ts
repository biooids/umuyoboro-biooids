import { Router } from "express";
import { adminController } from "./admin.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { requireRole } from "../../middleware/requireRole.js";
import { Role } from "@/prisma-client";
// UPDATED: Import the new validator and schema
import { validateQuery, getUsersQuerySchema } from "./admin.validators.js";

const router: Router = Router();

router.use(
  authenticate({ required: true }),
  requireRole([Role.SUPER_ADMIN, Role.DEVELOPER])
);

// --- Admin Routes ---
router.get("/stats", adminController.getDashboardStats);

// UPDATED: Use the new 'validateQuery' middleware
router.get(
  "/users",
  validateQuery(getUsersQuerySchema),
  adminController.getAllUsers
);

router.delete("/users/:id", adminController.deleteUser);

export default router;
