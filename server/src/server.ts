// src/server.ts

import http from "http";
import app from "./app.js";
import { config } from "./config/index.js";
import { disconnectPrisma, connectPrisma } from "./db/prisma.js";
import { logger } from "./config/logger.js";
import { socketManager } from "./websockets/socketManager.js";

const PORT = config.port;
const httpServer = http.createServer(app);

// Initialize the WebSocket manager and attach it to the HTTP server.
socketManager.initialize(httpServer);

let isShuttingDown = false;

/**
 * Starts the application server after establishing a database connection.
 */
async function startServer() {
  try {
    // Attempt to connect to the database with a retry mechanism.
    await connectPrisma();

    // If the database connection is successful, start listening for HTTP requests.
    httpServer.listen(PORT, () => {
      logger.info(
        `🚀 Server (HTTP + WebSocket) listening on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    // If the initial DB connection fails after all retries, it's a fatal error.
    logger.fatal(
      { err: error },
      "❌ Failed to connect to database during startup. Server not started."
    );
    process.exit(1);
  }
}

/**
 * Handles the graceful shutdown of the server and its resources.
 * This function ensures that all connections are closed properly before the process exits.
 * @param signalSource The signal or event that triggered the shutdown (e.g., 'SIGINT').
 */
const performGracefulShutdown = async (signalSource: string) => {
  if (isShuttingDown) {
    logger.warn(
      `[Shutdown] Already in progress (triggered by ${signalSource})...`
    );
    return;
  }
  isShuttingDown = true;
  logger.info(`👋 Received ${signalSource}, shutting down gracefully...`);

  // Set a timeout to force exit if shutdown takes too long.
  const shutdownTimeout = setTimeout(() => {
    logger.error("⚠️ Graceful shutdown timed out (10s), forcing exit.");
    process.exit(1);
  }, 10000);

  try {
    // 1. Close WebSocket connections.
    await socketManager.close();

    // 2. Close the main HTTP server to stop accepting new requests.
    logger.info("🔌 Attempting to close HTTP server...");
    await new Promise<void>((resolve) => {
      httpServer.close((err?: Error & { code?: string }) => {
        if (err) {
          if (err.code === "ERR_SERVER_NOT_RUNNING") {
            logger.warn("⚠️ HTTP server was already not running or closed.");
          } else {
            logger.error({ err }, "❌ Error closing HTTP server");
          }
        } else {
          logger.info("✅ HTTP server closed.");
        }
        resolve();
      });
    });

    // 3. Disconnect from the database.
    await disconnectPrisma();

    // If all steps complete, clear the timeout and exit cleanly.
    clearTimeout(shutdownTimeout);
    logger.info("🚪 All services closed successfully. Exiting process...");
    process.exit(0);
  } catch (error: any) {
    clearTimeout(shutdownTimeout);
    logger.fatal({ err: error }, "❌ Error during graceful shutdown sequence");
    process.exit(1);
  }
};

/**
 * Handles critical, unrecoverable errors by initiating a graceful shutdown.
 * @param errorType A string describing the type of error (e.g., 'UNHANDLED REJECTION').
 * @param error The actual error object.
 */
const criticalErrorHandler = (errorType: string, error: Error | any) => {
  logger.fatal(
    { err: error },
    `💥 ${errorType}! Attempting graceful shutdown...`
  );

  // Initiate shutdown only if it's not already in progress.
  if (!isShuttingDown) {
    performGracefulShutdown(errorType).catch(() => {
      logger.fatal(
        "Force exiting after critical error and failed graceful shutdown."
      );
      process.exit(1);
    });

    // A final failsafe timeout in case shutdown hangs after a critical error.
    setTimeout(() => {
      logger.error(`Force exiting after ${errorType} (7s timeout).`);
      process.exit(1);
    }, 7000);
  }
};

// --- Process Signal and Error Handling ---

// Listen for standard termination signals from the OS or process managers.
const signals: NodeJS.Signals[] = ["SIGINT", "SIGTERM"];
signals.forEach((signal) => {
  process.on(signal, () => performGracefulShutdown(signal));
});

// Listen for errors that were not caught anywhere in the application's promise chains.
process.on("unhandledRejection", (reason, _promise) => {
  criticalErrorHandler("UNHANDLED REJECTION", reason);
});

// Listen for errors that were not caught in the synchronous execution path.
process.on("uncaughtException", (err) => {
  criticalErrorHandler("UNCAUGHT EXCEPTION", err);
});

// Finally, start the server.
startServer();
