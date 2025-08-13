// src/lib/hooks/useAuth.ts
"use client";

import { useAppSelector } from "./hooks";
import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";
import { Role } from "@/types/role.enum";

interface AuthTokenPayload {
  id: string;
  username: string;
  role: Role; // <-- This now uses the Role enum
  iat: number;
  exp: number;
}

export const useAuth = () => {
  const token = useAppSelector((state) => state.auth.token);

  const user = useMemo(() => {
    if (!token) return null;
    try {
      const decodedToken: AuthTokenPayload = jwtDecode(token);
      return {
        id: decodedToken.id,
        username: decodedToken.username,
        role: decodedToken.role,
      };
    } catch (error) {
      console.error("Failed to decode auth token:", error);
      return null;
    }
  }, [token]);

  return { user, token };
};
