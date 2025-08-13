// src/lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// --- Reducer Imports ---
import authReducer from "./features/auth/authSlice";

// --- API Slice Imports ---
import { authApiSlice } from "./features/auth/authApiSlice";
import { adminApiSlice } from "./features/admin/adminApiSlice";
import { examApiSlice } from "./features/exams/examApiSlice";
import { exerciseApiSlice } from "./features/exercises/exerciseApiSlice";

export const store = configureStore({
  reducer: {
    // Regular Redux slice
    auth: authReducer,

    // API slice reducers
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    [examApiSlice.reducerPath]: examApiSlice.reducer,

    [exerciseApiSlice.reducerPath]: exerciseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(adminApiSlice.middleware)
      .concat(examApiSlice.middleware)

      .concat(exerciseApiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
