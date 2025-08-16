// src/lib/features/auth/auth.schemas.ts

import { z } from "zod";

/**
 * Zod schema for validating the login form on the client-side.
 */
export const loginSchema = z.object({
  // CHANGE: Login now uses `phone` instead of `username`.
  phone: z.string().min(1, "Phone number is required."),
  password: z.string().min(1, "Password is required."),
});

/**
 * Zod schema for validating the sign-up form on the client-side.
 * These rules should mirror the backend validation for a better user experience.
 */
export const signUpSchema = z
  .object({
    // CHANGE: Username validation now matches the backend's stricter rules.
    username: z
      .string()
      .min(3, "Username must be at least 3 characters.")
      .max(20, "Username must be no more than 20 characters.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores."
      ),
    // CHANGE: Phone validation now matches the backend's specific format.
    phone: z
      .string()
      .regex(/^(07[2389])\d{7}$/, "Please enter a valid Rwandan phone number."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string(),
  })
  // This rule ensures that the password and confirm password fields match.
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password ntago zisa, iyambere niyakabiri bigomba kuba bisa .",
    path: ["confirmPassword"], // Apply the error to the `confirmPassword` field.
  });

// Export TypeScript types inferred from the Zod schemas for use in form components.
export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;
