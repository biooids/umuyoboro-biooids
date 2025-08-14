// src/lib/utils/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join Tailwind CSS class names together.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * An improved utility function to extract a user-friendly error message
 * from various potential API error object structures.
 *
 * @param error The error object, typically from an RTK Query hook.
 * @returns A string containing the most specific error message found.
 */
export const getApiErrorMessage = (error: any): string => {
  // 1. Check for the standard RTK Query error structure.
  if (error && typeof error === "object" && "data" in error) {
    const errorData = error.data as any;
    // 2. Prioritize the `message` field if it exists.
    if (errorData?.message) {
      return errorData.message;
    }
  }

  // 3. Check for a top-level `message` property on the error itself.
  if (error && typeof error === "object" && "message" in error) {
    return error.message;
  }

  // 4. If all else fails, return the generic fallback message.
  return "An unknown error occurred. Please try again.";
};
