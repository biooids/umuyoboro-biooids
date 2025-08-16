import cron from "node-cron";
import prisma from "../db/prisma.js";
import { logger } from "../config/logger.js";

/**
 * A scheduled job that runs once every day at midnight to clean up
 * expired and revoked refresh tokens from the database.
 */
export const startTokenCleanupJob = () => {
  // Runs daily at midnight
  cron.schedule("0 0 * * *", async () => {
    logger.info("Running scheduled job: Cleaning up old refresh tokens...");
    try {
      const result = await prisma.refreshToken.deleteMany({
        where: {
          // --- THIS IS THE FIX ---
          // Delete any token that is either revoked OR expired.
          OR: [{ revoked: true }, { expiresAt: { lt: new Date() } }],
        },
      });
      logger.info(
        `Token cleanup successful: ${result.count} old tokens deleted.`
      );
    } catch (error) {
      logger.error({ err: error }, "Error during token cleanup job.");
    }
  });

  logger.info("✅ Token cleanup job scheduled to run daily at midnight.");
};
