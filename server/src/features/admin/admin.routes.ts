// src/features/admin/admin.routes.ts

import { Router } from "express";
import { adminController } from "./admin.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { requireRole } from "../../middleware/requireRole.js"; // <-- IMPORT
import { Role } from "@/prisma-client"; // <-- IMPORT

const router: Router = Router();

// Apply authentication AND role protection to ALL admin routes.
// Only SUPER_ADMIN and DEVELOPER roles can access these endpoints.
router.use(
  authenticate({ required: true }),
  requireRole([Role.SUPER_ADMIN, Role.DEVELOPER])
);

// --- Admin Routes ---
router.get("/stats", adminController.getDashboardStats);
router.get("/users", adminController.getAllUsers);
router.delete("/users/:id", adminController.deleteUser);

export default router;
