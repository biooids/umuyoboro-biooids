// src/features/apiRoutes.ts

import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import authRoutes from "./auth/auth.routes.js";
import adminRoutes from "./admin/admin.routes.js";
import examRoutes from "./exams/exam.routes.js";
import exerciseRoutes from "./exercises/exercise.routes.js";
import userRoutes from "./user/user.routes.js";
const router: Router = Router();

/**
 * This is the main router for the v1 API.
 * It organizes all feature-specific routes.
 */

// A simple health check for the API router itself.
router.get("/health", (_req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "API router is healthy." });
});

// --- Public Routes ---
// Routes under '/auth' are for registration, login, etc., and manage their own protection.
router.use("/auth", authRoutes);

// --- Protected Routes ---
// All routes mounted after this middleware will require a valid access token.
router.use(authenticate({ required: true }));

// Mount the feature-specific routers.
router.use("/users", userRoutes);
router.use("/admin", adminRoutes);
router.use("/exams", examRoutes);
router.use("/exercises", exerciseRoutes);

export default router;
