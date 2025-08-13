// src/websockets/socketManager.ts

import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import jwt from "jsonwebtoken";
import { config } from "../config/index.js";
import { logger } from "../config/logger.js";
import { corsOptions } from "../config/corsOptions.js";
// CHANGE: Import the specific payload type for better type safety.
import { DecodedAccessTokenPayload } from "../features/auth/auth.types.js";

// Extend the base Socket type to include our custom `userId` property.
interface SocketWithUser extends Socket {
  userId?: string;
}

class SocketManager {
  private io: Server | null = null;

  /**
   * Initializes the Socket.IO server, attaching it to the main HTTP server
   * and configuring middleware for authentication and CORS.
   * @param httpServer The application's main HTTP server instance.
   */
  public initialize(httpServer: HttpServer): void {
    this.io = new Server(httpServer, {
      // Use the same CORS options as the main Express app for consistency.
      cors: corsOptions,
    });

    // Middleware to authenticate socket connections using a JWT access token.
    this.io.use((socket: SocketWithUser, next) => {
      // The token is expected to be passed in the `auth` object during connection.
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error("Authentication error: No token provided."));
      }

      try {
        // CHANGE: Use the specific payload type and validate the token type.
        // This ensures that only an access token can be used for WebSocket authentication.
        const decoded = jwt.verify(
          token,
          config.jwt.accessSecret
        ) as DecodedAccessTokenPayload;

        if (decoded.type !== "access") {
          return next(new Error("Authentication error: Invalid token type."));
        }

        // Attach the user's ID to the socket object for use in event handlers.
        socket.userId = decoded.id;
        next();
      } catch (err) {
        // This will catch expired tokens, invalid signatures, etc.
        return next(new Error("Authentication error: Invalid token."));
      }
    });

    // Main connection handler for when a client successfully connects.
    this.io.on("connection", (socket: SocketWithUser) => {
      logger.info({ userId: socket.userId }, "A user connected via WebSocket.");

      // Join the user to a private room named after their own user ID.
      // This allows us to easily emit events to a specific user.
      if (socket.userId) {
        socket.join(socket.userId);
      }

      socket.on("disconnect", () => {
        logger.info({ userId: socket.userId }, "A user disconnected.");
      });
    });

    logger.info("✅ WebSocket server initialized.");
  }

  /**
   * Emits a notification event to a specific user via their private room.
   * @param userId The ID of the user to notify.
   * @param notification The notification data to send.
   */
  public emitNotification(userId: string, notification: any): void {
    if (this.io) {
      this.io.to(userId).emit("new_notification", notification);
      logger.info(
        { userId, notificationId: notification.id },
        "Emitted new notification."
      );
    }
  }

  /**
   * Gracefully closes all active WebSocket connections.
   * This is called during the server's shutdown sequence.
   */
  public close(): Promise<void> {
    return new Promise((resolve) => {
      if (this.io) {
        this.io.close(() => {
          logger.info("✅ WebSocket server closed.");
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}

// Export a singleton instance of the manager.
export const socketManager = new SocketManager();
