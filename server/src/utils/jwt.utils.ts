// src/utils/jwt.utils.ts

import { Role } from "@/prisma-client";
import jwt, {
  SignOptions,
  TokenExpiredError,
  JsonWebTokenError,
} from "jsonwebtoken";
import crypto from "crypto";
import { config } from "../config/index.js";
import prisma from "../db/prisma.js";
import {
  DecodedAccessTokenPayload,
  DecodedRefreshTokenPayload,
} from "../features/auth/auth.types.js";
import { createHttpError } from "./error.factory.js";
import { HttpError } from "./HttpError.js";
import { logger } from "../config/logger.js";

/**
 * Generates a short-lived Access JWT for a user, used to authorize API requests.
 */
export const generateAccessToken = (user: {
  id: string;
  username: string;
  role: Role;
}): string => {
  const payload: Omit<DecodedAccessTokenPayload, "iat" | "exp"> = {
    id: user.id,
    username: user.username,
    role: user.role,
    type: "access",
  };

  const options: SignOptions = {
    expiresIn: config.jwt.accessExpiresInSeconds,
  };

  const token = jwt.sign(payload, config.jwt.accessSecret, options);
  logger.info({ userId: user.id }, "[JWT Utils] Generated Access Token");
  return token;
};

/**
 * Generates a long-lived Refresh JWT, stores its unique identifier (jti) in the database,
 * and returns the token details. This token is used to get a new access token.
 */
export const generateAndStoreRefreshToken = async (
  userId: string
): Promise<{ token: string; expiresAt: Date }> => {
  const jti = crypto.randomUUID();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + config.jwt.refreshExpiresInDays);

  const payload = { id: userId, type: "refresh" as const };

  try {
    // Store the token's unique ID in the database to track its validity.
    await prisma.refreshToken.create({
      data: { jti, userId, expiresAt },
    });
    logger.info({ jti, userId }, "[JWT Utils] Refresh token JTI stored in DB");
  } catch (dbError) {
    logger.error(
      { err: dbError },
      "[JWT Utils] Failed to store refresh token in DB"
    );
    throw createHttpError(500, "Could not save session information.");
  }

  const token = jwt.sign(payload, config.jwt.refreshSecret, {
    expiresIn: `${config.jwt.refreshExpiresInDays}d`,
    jwtid: jti, // Embed the unique ID into the token itself.
  });

  return { token, expiresAt };
};

/**
 * Verifies a refresh token's signature and validates its status against the database.
 * This function is critical for securely issuing new access tokens.
 * A failure here indicates an invalid session, requiring the user to log in again.
 * A success allows the refresh to happen silently in the background.
 */
export const verifyAndValidateRefreshToken = async (
  token: string
): Promise<DecodedRefreshTokenPayload> => {
  try {
    // 1. Verify the token's signature and decode its payload.
    const decoded = jwt.verify(
      token,
      config.jwt.refreshSecret
    ) as DecodedRefreshTokenPayload;

    // 2. Ensure the token has the necessary payload structure.
    if (!decoded.jti || !decoded.id || decoded.type !== "refresh") {
      throw createHttpError(401, "Invalid refresh token payload structure.");
    }

    // 3. Check if the token's unique ID exists in our database.
    const storedToken = await prisma.refreshToken.findUnique({
      where: { jti: decoded.jti },
    });

    if (!storedToken) {
      // If not found, the token is invalid (e.g., from a deleted session).
      throw createHttpError(403, "Session not found. Please log in again.");
    }

    // 4. Check if the token has been explicitly revoked (e.g., by logout or rotation).
    if (storedToken.revoked) {
      // This prevents the re-use of old, invalidated tokens.
      throw createHttpError(
        403,
        "Session has been revoked. Please log in again."
      );
    }

    // 5. Check if the token's expiry date (from the DB) has passed.
    if (new Date() > storedToken.expiresAt) {
      throw createHttpError(403, "Session has expired. Please log in again.");
    }

    // 6. Security Check: Ensure the user ID in the token matches the one in the DB record.
    if (storedToken.userId !== decoded.id) {
      // This is a critical failure, suggesting a token mismatch or tampering.
      // We revoke the token immediately to prevent further use.
      await prisma.refreshToken.update({
        where: { jti: decoded.jti },
        data: { revoked: true },
      });
      logger.fatal(
        {
          jti: decoded.jti,
          expectedUserId: storedToken.userId,
          actualUserId: decoded.id,
        },
        "CRITICAL: Refresh token user ID mismatch. Token voided."
      );
      throw createHttpError(403, "Session invalid; token has been voided.");
    }

    // If all checks pass, the token is valid.
    logger.info(
      { jti: decoded.jti },
      "[JWT Utils] Refresh token successfully validated."
    );
    return decoded;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error; // Re-throw our custom errors.
    }
    // Handle generic JWT errors from the `verify` function.
    if (
      error instanceof TokenExpiredError ||
      error instanceof JsonWebTokenError
    ) {
      logger.warn(
        { err: error },
        "[JWT Utils] Session token is invalid or expired"
      );
      throw createHttpError(
        403,
        "Your session is invalid or expired. Please log in again."
      );
    }
    // Catch any other unexpected errors.
    logger.error(
      { err: error },
      "[JWT Utils] Unexpected error during refresh token verification"
    );
    throw createHttpError(
      500,
      "Could not verify session due to a server issue."
    );
  }
};
