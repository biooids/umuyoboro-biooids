// src/lib/utils/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join Tailwind CSS class names together.
 * It intelligently merges classes, avoiding conflicts (e.g., `p-2` and `p-4`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A utility function to extract a user-friendly error message from an API error object.
 * It gracefully handles different possible error structures.
 * @param error The error object, typically from an RTK Query hook.
 * @returns A string containing the error message.
 */
export const getApiErrorMessage = (error: any): string => {
  if (error?.data?.message) {
    return error.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return "An unknown error occurred. Please try again.";
};
