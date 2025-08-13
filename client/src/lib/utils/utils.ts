// src/lib/utils/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This function is used to combine Tailwind CSS classes. It's still useful.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This function is used in your forms to get a clean API error message.
export const getApiErrorMessage = (error: any): string => {
  if (error?.data?.message) {
    return error.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return "An unknown error occurred. Please try again.";
};
