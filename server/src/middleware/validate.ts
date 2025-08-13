// src/middleware/validate.ts

import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import { createHttpError } from "../utils/error.factory.js";

/**
 * Creates an Express middleware that validates the incoming request's
 * body, query parameters, and route parameters against a provided Zod schema.
 *
 * @param schema The Zod schema to use for validation.
 * @returns An Express middleware function.
 */
export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      // Asynchronously parse the request parts against the schema.
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      // If validation succeeds, pass control to the next handler in the chain.
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        // If validation fails, create a user-friendly 400 Bad Request error.
        // We take the message from the first validation issue to keep the response simple.
        const firstErrorMessage = error.errors[0]?.message || "Invalid input.";
        return next(createHttpError(400, firstErrorMessage));
      }
      // For any other unexpected errors, pass them to the global error handler.
      next(createHttpError(500, "Internal Server Error during validation."));
    }
  };
