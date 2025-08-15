// src/middleware/globalErrorHandler.ts

import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { Prisma } from "@/prisma-client";
import { config } from "../config/index.js";
import { HttpError } from "../utils/HttpError.js";
import { logger } from "../config/logger.js";

/**
 * The final middleware in the stack, designed to catch all errors from the application.
 * It standardizes the error response format, providing a consistent JSON payload
 * to the client while logging detailed error information on the server.
 */
export const globalErrorHandler: ErrorRequestHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction // Although _next is unused, it's required for Express to recognize this as an error handler.
): void => {
  console.error("--- GLOBAL ERROR HANDLER CAUGHT ---", err);

  let statusCode = 500;
  let message = "An internal server error occurred.";
  let status = "error";

  // Log the raw error for debugging purposes.
  logger.error({ err }, "💥 Global Error Handler Caught");

  // Handle custom, manually created HTTP errors.
  if (err instanceof HttpError) {
    statusCode = err.statusCode;
    message = err.message;
    status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
  }
  // Handle known errors from the Prisma client.
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002": // Unique constraint violation (e.g., duplicate username).
        const fields = (err.meta as { target?: string[] })?.target?.join(", ");
        statusCode = 409; // Conflict
        message = `A record with this ${fields || "value"} already exists.`;
        status = "fail";
        break;
      case "P2025": // Record to update or delete was not found.
        statusCode = 404; // Not Found
        message = `The requested resource was not found.`;
        status = "fail";
        break;
      default:
        // For other database errors, use a generic message.
        message = "A database error occurred.";
        break;
    }
  }
  // Handle JWT-specific errors.
  else if (err instanceof TokenExpiredError) {
    statusCode = 401; // Unauthorized
    message = "Unauthorized: Your session has expired. Please log in again.";
    status = "fail";
  } else if (err instanceof JsonWebTokenError) {
    statusCode = 401; // Unauthorized
    message = "Unauthorized: Invalid session token.";
    status = "fail";
  }

  const responsePayload: { status: string; message: string; stack?: string } = {
    status,
    message,
  };

  // In development mode, include the error stack trace for easier debugging.
  if (config.nodeEnv === "development" && err instanceof Error && err.stack) {
    responsePayload.stack = err.stack;
  }

  res.status(statusCode).json(responsePayload);
};
