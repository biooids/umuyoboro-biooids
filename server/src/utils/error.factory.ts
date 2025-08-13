// src/utils/error.factory.ts

import { HttpError } from "./HttpError.js";

/**
 * A simple factory function to create instances of the HttpError class.
 * This provides a consistent way to generate HTTP errors throughout the application.
 *
 * @param statusCode - The HTTP status code for the error (e.g., 404, 401).
 * @param message - The user-friendly error message.
 * @returns An instance of HttpError.
 */
export const createHttpError = (
  statusCode: number,
  message: string
): HttpError => {
  return new HttpError(statusCode, message);
};
