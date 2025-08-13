// src/app.ts

import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { globalErrorHandler } from "./middleware/globalErrorHandler.js";
import { createHttpError } from "./utils/error.factory.js";
import { corsOptions } from "./config/corsOptions.js";
import apiRoutes from "./features/apiRoutes.js";
import { apiLimiter } from "./middleware/rateLimiter.js";

const app: Express = express();

// Set various security-related HTTP headers to protect the application.
app.use(helmet());

// Enable Cross-Origin Resource Sharing with the detailed options.
app.use(cors(corsOptions));

// Middleware to parse incoming JSON request bodies.
app.use(express.json({ limit: "10kb" }));

// Middleware to parse incoming URL-encoded request bodies.
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Middleware to parse cookies, essential for reading the refresh token.
app.use(cookieParser());

// --- Health Check Route ---
// A simple endpoint to verify that the API is up and running.
app.get("/", (_req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: "success", message: "API is healthy and running!" });
});

// --- API Routes ---
// Mount the main API router under the /api/v1 namespace and apply a rate limiter.
app.use("/api/v1", apiLimiter, apiRoutes);

// --- Not Found Handler ---
// This middleware catches any requests that don't match the routes defined above.
app.use((req: Request, _res: Response, next: NextFunction) => {
  next(createHttpError(404, `Can't find ${req.originalUrl} on this server!`));
});

// --- Global Error Handling Middleware ---
// This must be the LAST middleware in the chain to catch all errors.
app.use(globalErrorHandler);

export default app;
