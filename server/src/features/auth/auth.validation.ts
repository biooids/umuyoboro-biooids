// src/features/auth/auth.validation.ts

import { z } from "zod";

/**
 * Zod schema for validating user registration (signup) requests.
 * It enforces specific formats and constraints on the input fields.
 */
export const signupSchema = z.object({
  body: z.object({
    // Username must be 3-20 characters long and can only contain letters, numbers, and underscores.
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long.")
      .max(20, "Username must be no more than 20 characters long.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores."
      ),
    // Phone number must be a valid Rwandan number (e.g., 078, 073, 072, 079).
    phone: z
      .string()
      .regex(
        /^(07[2389])\d{7}$/,
        "Shyiramo number zemewe zomurwanda (e.g., 078...)."
      ),
    // Password must be at least 8 characters long.
    password: z
      .string()
      .min(8, "Password igomba kuba inyuguti umunani byibura."),
  }),
});

/**
 * Zod schema for validating user login requests.
 * Login is performed using a phone number and password.
 */
export const loginSchema = z.object({
  body: z.object({
    // Phone number is required for login.
    phone: z.string().min(1, "Phone number is required."),
    // Password is required for login.
    password: z.string().min(1, "Password is required."),
  }),
});
