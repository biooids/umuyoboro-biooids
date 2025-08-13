// src/features/auth/auth.types.ts

import { JwtPayload as OriginalJwtPayload } from "jsonwebtoken";
import { Role } from "@/prisma-client";

// --- JWT Payloads ---

/**
 * The structure of the decoded JWT Access Token payload.
 */
export interface DecodedAccessTokenPayload {
  id: string;
  type: "access";
  role: Role;
  username: string;
  iat: number;
  exp: number;
}

/**
 * The structure of the decoded JWT Refresh Token payload.
 */
export interface DecodedRefreshTokenPayload extends OriginalJwtPayload {
  id: string;
  jti: string; // The unique identifier for the token.
  type: "refresh";
}

// --- Service Input DTOs (Data Transfer Objects) ---

/**
 * Data Transfer Object for user registration.
 */
export interface SignUpInputDto {
  username: string;
  phone: string;
  password: string;
}

/**
 * Data Transfer Object for user login.
 * CHANGE: Login now uses `phone` instead of `username`.
 */
export interface LoginInputDto {
  phone: string;
  password: string;
}

// --- Service Output DTOs ---

/**
 * Represents the pair of tokens returned upon successful authentication.
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
}
