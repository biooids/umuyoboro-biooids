import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "../../utils/error.factory.js";

// Zod schema to validate and parse the query parameters for the user list
export const getUsersQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  q: z.string().optional(),
  sortBy: z.enum(["username", "createdAt"]).default("createdAt"),
  order: z.enum(["asc", "desc"]).default("desc"),
});

/**
 * A generic validation middleware that uses a Zod schema.
 * @param schema The Zod schema to validate against.
 */
export const validate =
  (schema: z.AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      // Replace req.query with the parsed and defaulted values
      req.query = schema.shape.query.parse(req.query);
      next();
    } catch (error: any) {
      const message = error.errors?.[0]?.message || "Invalid input provided.";
      next(createHttpError(400, message));
    }
  };
