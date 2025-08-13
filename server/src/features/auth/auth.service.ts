// src/features/auth/auth.service.ts

import bcrypt from "bcryptjs";
import { User } from "@/prisma-client";
import prisma from "../../db/prisma.js";
import { logger } from "../../config/logger.js";
import { createHttpError } from "../../utils/error.factory.js";
import {
  generateAccessToken,
  generateAndStoreRefreshToken,
  verifyAndValidateRefreshToken,
} from "../../utils/jwt.utils.js";
import { AuthTokens, LoginInputDto, SignUpInputDto } from "./auth.types.js";

/**
 * A helper function to remove the `hashedPassword` field from a user object
 * before sending it back to the client.
 * @param user The user object from the database.
 * @returns A sanitized user object without the password hash.
 */
const sanitizeUser = (user: User): Omit<User, "hashedPassword"> => {
  const { hashedPassword, ...sanitized } = user;
  return sanitized;
};

export class AuthService {
  /**
   * Registers a new user, hashes their password, and returns the new user object
   * along with access and refresh tokens.
   * @param input The user's signup details (username, phone, password).
   */
  public async registerUser(input: SignUpInputDto): Promise<{
    user: Omit<User, "hashedPassword">;
    tokens: AuthTokens;
  }> {
    const { username, phone, password } = input;

    // Check if a user with the same username or phone number already exists.
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { phone }] },
    });

    if (existingUser) {
      throw createHttpError(
        409, // 409 Conflict
        "A user with this username or phone number already exists."
      );
    }

    // Hash the password before storing it.
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, phone, hashedPassword },
    });

    logger.info({ userId: user.id }, "New user created successfully.");

    // Generate authentication tokens.
    const accessToken = generateAccessToken(user);
    const { token: refreshToken, expiresAt } =
      await generateAndStoreRefreshToken(user.id);

    return {
      user: sanitizeUser(user),
      tokens: { accessToken, refreshToken, refreshTokenExpiresAt: expiresAt },
    };
  }

  /**
   * Logs in an existing user by verifying their phone number and password.
   * @param input The user's login details (phone, password).
   */
  public async loginUser(input: LoginInputDto): Promise<{
    user: Omit<User, "hashedPassword">;
    tokens: AuthTokens;
  }> {
    const { phone, password } = input;

    // CHANGE: Find the user by their unique phone number.
    const user = await prisma.user.findUnique({
      where: { phone },
    });

    // If no user is found, or if the password does not match, return a generic error.
    // This prevents attackers from knowing whether a phone number is registered.
    if (!user) {
      throw createHttpError(401, "Invalid phone number or password.");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.hashedPassword
    );
    if (!isPasswordCorrect) {
      throw createHttpError(401, "Invalid phone number or password.");
    }

    // If credentials are correct, generate new tokens.
    const accessToken = generateAccessToken(user);
    const { token: refreshToken, expiresAt } =
      await generateAndStoreRefreshToken(user.id);

    return {
      user: sanitizeUser(user),
      tokens: { accessToken, refreshToken, refreshTokenExpiresAt: expiresAt },
    };
  }

  /**
   * Handles refresh token rotation: verifies an old refresh token, revokes it,
   * and issues a new pair of access and refresh tokens.
   * @param incomingRefreshToken The refresh token from the client's cookie.
   */
  public async handleRefreshTokenRotation(
    incomingRefreshToken: string
  ): Promise<{
    newAccessToken: string;
    newRefreshToken: string;
    newRefreshTokenExpiresAt: Date;
  }> {
    if (!incomingRefreshToken) {
      throw createHttpError(401, "Refresh token is required.");
    }

    // Verify the incoming token is valid and not revoked.
    const decodedOldToken = await verifyAndValidateRefreshToken(
      incomingRefreshToken
    );

    const user = await prisma.user.findUnique({
      where: { id: decodedOldToken.id },
    });

    if (!user) {
      // This is an edge case where the user was deleted but the token still exists.
      await this.revokeTokenByJti(decodedOldToken.jti);
      throw createHttpError(403, "Forbidden: User account not found.");
    }

    // Revoke the old token to prevent its reuse.
    await this.revokeTokenByJti(decodedOldToken.jti);

    // Issue a new pair of tokens.
    const newAccessToken = generateAccessToken(user);
    const { token: newRefreshToken, expiresAt: newRefreshTokenExpiresAt } =
      await generateAndStoreRefreshToken(user.id);

    return { newAccessToken, newRefreshToken, newRefreshTokenExpiresAt };
  }

  /**
   * Logs a user out by revoking their current refresh token.
   * @param incomingRefreshToken The refresh token from the client's cookie.
   */
  public async handleUserLogout(incomingRefreshToken?: string): Promise<void> {
    if (!incomingRefreshToken) {
      return; // No token to revoke.
    }
    try {
      // Verify the token to get its JTI, then revoke it.
      const decoded = await verifyAndValidateRefreshToken(incomingRefreshToken);
      await this.revokeTokenByJti(decoded.jti);
      logger.info({ jti: decoded.jti }, "User logged out, token revoked.");
    } catch (error) {
      // It's safe to ignore errors here. If the token is already invalid,
      // there's nothing to revoke, and the user is effectively logged out.
      logger.warn(
        { err: error },
        "Logout failed: could not verify or revoke token (it may have been invalid or expired)."
      );
    }
  }

  /**
   * A private helper to revoke a refresh token by its JTI (JWT ID).
   * @param jti The unique identifier of the token to revoke.
   */
  private async revokeTokenByJti(jti: string): Promise<void> {
    try {
      await prisma.refreshToken.update({
        where: { jti },
        data: { revoked: true },
      });
    } catch (err) {
      // This error can be ignored, as it likely means the token was already
      // deleted or revoked, which achieves the desired outcome.
      logger.warn(
        { err, jti },
        "Failed to revoke single token, it might have already been deleted or revoked."
      );
    }
  }
}

export const authService = new AuthService();
