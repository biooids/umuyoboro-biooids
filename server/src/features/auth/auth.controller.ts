// src/features/auth/auth.controller.ts

import { Request, Response } from "express";
import { config } from "../../config/index.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { authService } from "./auth.service.js";

/**
 * The AuthController handles the HTTP layer for authentication-related requests.
 * It calls the AuthService to perform the business logic and manages the
 * request/response cycle, including setting secure cookies.
 */
class AuthController {
  /**
   * Handles user registration requests.
   */
  signup = asyncHandler(async (req: Request, res: Response) => {
    const { user, tokens } = await authService.registerUser(req.body);

    // Set the refresh token in a secure, httpOnly cookie.
    res.cookie(config.cookies.refreshTokenName, tokens.refreshToken, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie.
      secure: config.nodeEnv === "production", // Only send over HTTPS in production.
      sameSite: "strict", // Mitigates CSRF attacks.
      expires: tokens.refreshTokenExpiresAt,
    });

    // Return the sanitized user object and the access token in the response body.
    res.status(201).json({
      status: "success",
      message: "User registered successfully.",
      data: { user, accessToken: tokens.accessToken },
    });
  });

  /**
   * Handles user login requests.
   */
  login = asyncHandler(async (req: Request, res: Response) => {
    const { user, tokens } = await authService.loginUser(req.body);

    // Set the refresh token in a secure cookie upon successful login.
    res.cookie(config.cookies.refreshTokenName, tokens.refreshToken, {
      httpOnly: true,
      secure: config.nodeEnv === "production",
      sameSite: "strict",
      expires: tokens.refreshTokenExpiresAt,
    });

    res.status(200).json({
      status: "success",
      message: "Logged in successfully.",
      data: { user, accessToken: tokens.accessToken },
    });
  });

  /**
   * Handles requests to refresh an access token using a refresh token.
   */
  refreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
    const incomingRefreshToken = req.cookies[config.cookies.refreshTokenName];

    const { newAccessToken, newRefreshToken, newRefreshTokenExpiresAt } =
      await authService.handleRefreshTokenRotation(incomingRefreshToken);

    // Set the new refresh token in the cookie, replacing the old one.
    res.cookie(config.cookies.refreshTokenName, newRefreshToken, {
      httpOnly: true,
      secure: config.nodeEnv === "production",
      sameSite: "strict",
      expires: newRefreshTokenExpiresAt,
    });

    // Return the new access token.
    res.status(200).json({
      status: "success",
      message: "Token refreshed successfully.",
      data: { accessToken: newAccessToken },
    });
  });

  /**
   * Handles user logout requests.
   */
  logout = asyncHandler(async (req: Request, res: Response) => {
    const incomingRefreshToken = req.cookies[config.cookies.refreshTokenName];
    await authService.handleUserLogout(incomingRefreshToken);

    // Clear the refresh token cookie from the browser.
    res.clearCookie(config.cookies.refreshTokenName);
    res
      .status(200)
      .json({ status: "success", message: "Logged out successfully." });
  });
}

export const authController = new AuthController();
