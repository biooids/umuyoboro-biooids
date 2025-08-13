// src/features/auth/auth.routes.ts

import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validate } from "../../middleware/validate.js";
import { authenticate } from "../../middleware/authenticate.js";
import { authLimiter } from "../../middleware/rateLimiter.js";
import { loginSchema, signupSchema } from "./auth.validation.js";

const router: Router = Router();

// --- Public Authentication Routes ---
// These routes are for users who are not yet logged in.

// The 'register' endpoint is rate-limited and validates the request body.
router.post(
  "/register",
  authLimiter,
  validate(signupSchema),
  authController.signup
);

// The 'login' endpoint is also rate-limited and validates the request body.
router.post("/login", authLimiter, validate(loginSchema), authController.login);

// The 'refresh' endpoint allows obtaining a new access token.
// It doesn't need the authLimiter as it relies on a valid refresh token.
router.post("/refresh", authController.refreshAccessToken);

// --- Protected Authentication Route ---
// This route requires an authenticated user.

// The 'logout' endpoint requires a valid access token to identify the user's session.
router.post("/logout", authenticate({ required: true }), authController.logout);

export default router;
