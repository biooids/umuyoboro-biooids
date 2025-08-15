// src/features/admin/admin.validators.ts

import { z, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "../../utils/error.factory.js";

// The Zod schema defines the validation rules.
export const getUsersQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  q: z.string().optional(),
  sortBy: z.enum(["username", "createdAt"]).default("createdAt"),
  order: z.enum(["asc", "desc"]).default("desc"),
});

// Infer the TypeScript type from the schema for our type assertion.
type ValidatedQuery = z.infer<typeof getUsersQuerySchema>;

/**
 * A validation middleware that targets req.query.
 */
export const validateQuery =
  (schema: z.AnyZodObject) =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      const parsedQuery = schema.parse(req.query);

      // THE FIX: Use a type assertion 'as ValidatedQuery' to resolve the error.
      req.validatedData = parsedQuery as ValidatedQuery;

      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.error("Zod Validation Failed:", {
          query: req.query,
          errors: error.flatten(),
        });
        const message = error.errors?.[0]?.message || "Invalid input provided.";
        return next(createHttpError(400, message));
      }

      console.error("An unexpected error occurred in validation:", error);
      return next(
        createHttpError(500, "An internal error occurred during validation.")
      );
    }
  };
