// src/db/prisma.ts

import { PrismaClient } from "@/prisma-client";
import { config } from "../config/index.js";
import { logger } from "../config/logger.js";

/**
 * Singleton instance of the Prisma Client.
 * This is shared across the entire application to ensure efficient connection pooling.
 */
const prisma = new PrismaClient({
  log:
    config.nodeEnv === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
});

// --- Connection Logic ---
const MAX_CONNECT_RETRIES = 5;
const CONNECT_RETRY_DELAY_MS = 5000;

/**
 * Establishes a connection to the database via the Prisma client.
 * Implements a retry mechanism for resilience during application startup.
 * @param retriesLeft The number of connection attempts remaining.
 */
export async function connectPrisma(
  retriesLeft: number = MAX_CONNECT_RETRIES
): Promise<void> {
  try {
    await prisma.$connect();
    logger.info("✅ Successfully connected to the database via Prisma.");
  } catch (error: any) {
    const currentAttempt = MAX_CONNECT_RETRIES - retriesLeft + 1;

    logger.error(
      { err: error, attempt: currentAttempt, maxRetries: MAX_CONNECT_RETRIES },
      `❌ Prisma Connection Error`
    );

    if (retriesLeft > 0) {
      logger.info(
        `Retrying connection in ${CONNECT_RETRY_DELAY_MS / 1000} seconds...`
      );
      await new Promise((resolve) =>
        setTimeout(resolve, CONNECT_RETRY_DELAY_MS)
      );
      return connectPrisma(retriesLeft - 1);
    } else {
      logger.fatal(
        "❌ Exhausted all retries. Failed to connect to the database. Exiting."
      );
      process.exit(1);
    }
  }
}

// Export the singleton client as the default export for use in other parts of the app.
export default prisma;

/**
 * Gracefully disconnects the Prisma client from the database.
 * This is called during the server shutdown sequence.
 */
export async function disconnectPrisma(): Promise<void> {
  try {
    await prisma.$disconnect();
    logger.info("🔌 Prisma disconnected successfully.");
  } catch (error) {
    logger.error({ err: error }, "❌ Error during Prisma disconnect");
  }
}
