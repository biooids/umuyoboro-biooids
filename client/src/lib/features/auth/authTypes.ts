// src/lib/features/auth/authTypes.ts

import { Role } from "@/types/role.enum";

// --- DTOs for API requests ---

/**
 * Data Transfer Object for login requests.
 * CHANGE: Uses `phone` and fields are now required.
 */
export interface LoginInputDto {
  phone: string;
  password: string;
}

/**
 * Data Transfer Object for signup requests.
 * CHANGE: Fields are now required.
 */
export interface SignUpInputDto {
  username: string;
  phone: string;
  password: string;
}

// --- The user object shape from the backend ---

/**
 * Represents the sanitized user object returned from the API.
 * This should match the user data available in the `authenticate` middleware on the backend.
 */
export interface SanitizedUserDto {
  id: string;
  username: string;
  phone: string;
  role: Role;
  isPaid: boolean; // CHANGE: Added to match the backend model.
  createdAt: string;
  updatedAt: string;
}

// --- API Response Shape ---

/**
 * The expected shape of the API response for a successful login or signup.
 */
export interface LoginApiResponse {
  status: string;
  message: string;
  data: {
    user: SanitizedUserDto;
    accessToken: string;
  };
}
