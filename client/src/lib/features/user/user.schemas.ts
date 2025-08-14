// src/lib/features/user/user.schemas.ts

import { z } from "zod";

/**
 * Zod schema for validating the user profile update form.
 * This ensures that any data sent to the backend is in the correct format,
 * providing immediate feedback to the user and reducing invalid API calls.
 */
export const updateUserSchema = z.object({
  // Username must be 3-20 characters long and can only contain letters, numbers, and underscores.
  // This rule should exactly match the backend validation.
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username must be no more than 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
});

// Export the TypeScript type inferred from the Zod schema for use in form components.
export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;
