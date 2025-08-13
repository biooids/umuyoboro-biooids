// src/middleware/authenticate.ts

import { Request, Response, NextFunction } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import prisma from "../db/prisma.js";
import { config } from "../config/index.js";
import { asyncHandler } from "./asyncHandler.js";
import { createHttpError } from "../utils/error.factory.js";
import { DecodedAccessTokenPayload } from "../features/auth/auth.types.js";

// Options to configure the behavior of the authentication middleware.
interface AuthOptions {
  /** If true, the middleware will throw an error if the user is not authenticated.
   * If false, it will attach the user if available, or null, and continue.
   */
  required?: boolean;
}

/**
 * A flexible authentication middleware that verifies a JWT access token.
 * It extracts the token from the 'Authorization: Bearer <token>' header,
 * verifies its signature, and fetches the corresponding user from the database.
 * The sanitized user object is then attached to the `req.user` property.
 *
 * @param options - Configuration for the middleware's behavior.
 */
export const authenticate = (options: AuthOptions = {}) =>
  asyncHandler(async (req: Request, _res: Response, next: NextFunction) => {
    const { required = false } = options;
    let token: string | undefined;

    // 1. Extract the token from the Authorization header.
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // 2. Handle the case where no token is provided.
    if (!token) {
      if (required) {
        // If authentication is required for this route, block the request.
        return next(
          createHttpError(401, "Authentication required. No token provided.")
        );
      }
      // If authentication is optional, proceed without a user object.
      req.user = null;
      return next();
    }

    try {
      // 3. Verify the token's signature and payload structure.
      const decoded = jwt.verify(
        token,
        config.jwt.accessSecret
      ) as DecodedAccessTokenPayload;

      if (!decoded.id || decoded.type !== "access") {
        throw new JsonWebTokenError("Invalid token payload.");
      }

      // 4. Fetch the most up-to-date user data from the database.
      // This ensures that any changes to user roles or status are immediately reflected.
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          username: true,
          phone: true,
          role: true,
          isPaid: true,
        },
      });

      // 5. Handle the case where the user from the token no longer exists.
      if (!user) {
        if (required) {
          return next(createHttpError(401, "User not found."));
        }
        req.user = null;
        return next();
      }

      // 6. Attach the sanitized user object to the request and proceed.
      req.user = user;
      next();
    } catch (error) {
      // Catch any JWT-related errors (e.g., expired token, invalid signature).
      if (required) {
        return next(
          createHttpError(401, "Invalid or expired token. Please log in again.")
        );
      }
      // If optional, just clear the user and proceed.
      req.user = null;
      next();
    }
  });
