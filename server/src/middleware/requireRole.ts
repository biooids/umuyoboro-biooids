// src/middleware/requireRole.ts

import { Request, Response, NextFunction } from "express";
import { createHttpError } from "../utils/error.factory.js";
import { Role } from "@/prisma-client";

/**
 * Creates an Express middleware for Role-Based Access Control (RBAC).
 * It checks if the authenticated user (attached by the `authenticate` middleware)
 * has one of the specified roles required to access a route.
 *
 * @param requiredRoles An array of `Role` enums that are permitted.
 * @returns An Express middleware function.
 */
export const requireRole = (requiredRoles: Role[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    // This middleware must run *after* the `authenticate` middleware.
    const userRole = req.user?.role;

    // If the user has a role and it's in the list of required roles, allow access.
    if (userRole && requiredRoles.includes(userRole)) {
      return next();
    }

    // If the user has no role or their role is not permitted, block access with a 403 Forbidden error.
    return next(
      createHttpError(
        403,
        "Forbidden: You do not have permission to access this resource."
      )
    );
  };
};
