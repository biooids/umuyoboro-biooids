// src/middleware/rateLimiter.ts

import rateLimit from "express-rate-limit";

/**
 * A general rate limiter for most API routes to prevent abuse and ensure service availability.
 */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window.
  message: "Too many requests from this IP, please try again after 15 minutes.",
  standardHeaders: "draft-7", // Use standardized `RateLimit-*` headers.
  legacyHeaders: false, // Disable the non-standard `X-RateLimit-*` headers.
});

/**
 * A stricter rate limiter specifically for sensitive authentication routes (login, register).
 * This helps to mitigate brute-force attacks.
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 authentication attempts per window.
  message:
    "Too many login or registration attempts from this IP, please try again after 15 minutes.",
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
