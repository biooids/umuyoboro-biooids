// src/lib/schemas/authSchemas.ts
import { z } from "zod";

// --- Login Form Schema ---
export const loginSchema = z.object({
  username: z.string().min(1, "Username is required."),
  password: z.string().min(1, "Password is required."),
});

// --- Sign Up Form Schema ---
export const signUpSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters long."),
    phone: z.string().min(10, "Please enter a valid phone number."),
    password: z.string().min(8, "Password must be at least 8 characters long."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // Point the error to the confirm password field
  });

// --- Export the form value types ---
export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;
