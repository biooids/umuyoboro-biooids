// src/middleware/asyncHandler.ts

import { Request, Response, NextFunction } from "express";

// A type definition for an Express request handler that returns a Promise.
type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

/**
 * A utility that wraps an asynchronous Express route handler.
 * It catches any errors that occur within the async function and automatically
 * passes them to the Express `next()` function, which then forwards them to the
 * global error handler. This avoids the need for explicit try/catch blocks in every controller.
 *
 * @param fn The async request handler function to wrap.
 * @returns A standard Express request handler.
 */
export const asyncHandler =
  (fn: AsyncRequestHandler) =>
  (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
