// src/lib/features/user/userTypes.ts

import { SanitizedUserDto } from "../auth/authTypes";

// --- DTO for API requests ---

/**
 * Data Transfer Object for updating a user's profile.
 * Currently, only the username can be updated.
 */
export interface UserUpdateInputDto {
  username: string;
}

// --- API Response Shape ---

/**
 * The expected shape of the API response for a successful user profile request.
 */
export interface UserProfileApiResponse {
  status: string;
  message?: string;
  data: {
    user: SanitizedUserDto;
  };
}
