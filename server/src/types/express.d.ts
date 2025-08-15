// src/types/express.d.ts

import { z } from "zod";
import { Role } from "@prisma/client";
import { getUsersQuerySchema } from "../features/admin/admin.validators";

// This line is important for declaration merging to work correctly.
export {};

// --- TYPE DEFINITIONS ---

// Shape of the user object from the authenticate middleware
interface SanitizedUser {
  id: string;
  username: string;
  phone: string;
  role: Role;
  isPaid: boolean;
}

// Shape of the validated query data from the validation middleware
type ValidatedQuery = z.infer<typeof getUsersQuerySchema>;

// --- GLOBAL TYPE MERGING ---

declare global {
  namespace Express {
    // Merge our custom properties into the global Express Request type
    export interface Request {
      user?: SanitizedUser | null;
      validatedData?: ValidatedQuery; // <-- The new property is added here
    }
  }
}
