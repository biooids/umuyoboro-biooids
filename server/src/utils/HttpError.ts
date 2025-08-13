// src/utils/HttpError.ts

/**
 * A custom error class for handling HTTP-specific errors.
 * It extends the base Error class to include an HTTP status code,
 * allowing for more structured error handling in the global error handler.
 */
export class HttpError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HttpError";

    // Restore the prototype chain, a common practice for custom errors in TypeScript.
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
