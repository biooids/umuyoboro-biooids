// src/lib/middleware/persistenceMiddleware.ts
import { Middleware } from "@reduxjs/toolkit";
import { setCredentials, loggedOut } from "../features/auth/authSlice";
import storage from "../utils/storage"; // <-- IMPORT our new DIY storage

const persistenceMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (setCredentials.match(action)) {
    const token = action.payload.token;
    if (token) {
      storage.setItem("authToken", token);
    } else {
      storage.removeItem("authToken");
    }
  }

  if (loggedOut.match(action)) {
    storage.removeItem("authToken");
  }

  return result;
};

export default persistenceMiddleware;
