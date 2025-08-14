// src/lib/hooks/useAuth.ts

"use client";

import { useAppSelector } from "./hooks";

/**
 * A custom hook to conveniently access the current authentication state.
 *
 * @returns An object containing the current `user` object (or null if not logged in)
 * and the raw `token` string.
 */
export const useAuth = () => {
  // Select the entire auth state from the Redux store.
  const { user, token } = useAppSelector((state) => state.auth);

  // Directly return the user object and token from the store.
  // This is simpler, more performant, and ensures the user data is always
  // in sync with the state managed by the API slices.
  return { user, token };
};
