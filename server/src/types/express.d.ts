// src/types/express.d.ts
import { Role } from "@/prisma-client"; // <-- IMPORT the Role enum

// This line is important for declaration merging to work correctly.
export {};

// Define the shape of the user object that your authenticate middleware creates
interface SanitizedUser {
  id: string;
  username: string;
  phone: string;
  role: Role;
  isPaid: boolean;
}

declare global {
  namespace Express {
    // Merge our custom user property into the global Express Request type
    interface Request {
      user?: SanitizedUser | null;
    }
  }
}
