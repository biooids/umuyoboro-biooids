// src/features/user/user.validation.ts

import { z } from "zod";

/**
 * Zod schema for validating user profile update requests.
 * It allows a user to update their username. All fields are optional,
 * so the user only needs to provide the data they wish to change.
 */
export const updateUserSchema = z.object({
  body: z.object({
    // Username must be 3-20 characters long and can only contain letters, numbers, and underscores.
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long.")
      .max(20, "Username must be no more than 20 characters long.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores."
      )
      .optional(), // Make the field optional for PATCH requests.
  }),
});