// src/features/user/user.service.ts

import { User } from "@/prisma-client";
import prisma from "../../db/prisma.js";
import { createHttpError } from "../../utils/error.factory.js";
import { logger } from "../../config/logger.js";

// A type for the data that can be used to update a user's profile.
type UserUpdateInput = {
  username?: string;
};

/**
 * A helper function to remove the `hashedPassword` field from a user object
 * before sending it back to the client.
 * @param user The user object from the database.
 * @returns A sanitized user object without the password hash.
 */
const sanitizeUser = (user: User): Omit<User, "hashedPassword"> => {
  const { hashedPassword, ...sanitized } = user;
  return sanitized;
};

class UserService {
  /**
   * Retrieves the profile of the currently authenticated user.
   * @param userId The ID of the authenticated user.
   * @returns The sanitized user object.
   */
  public async getOwnProfile(
    userId: string
  ): Promise<Omit<User, "hashedPassword">> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      // This is an unlikely edge case if the token is valid but the user was just deleted.
      throw createHttpError(404, "User not found.");
    }

    return sanitizeUser(user);
  }

  /**
   * Updates the profile of the currently authenticated user.
   * @param userId The ID of the user to update.
   * @param data The data to update (e.g., a new username).
   * @returns The updated and sanitized user object.
   */
  public async updateOwnProfile(
    userId: string,
    data: UserUpdateInput
  ): Promise<Omit<User, "hashedPassword">> {
    // If the user is trying to update their username, check if it's already taken.
    if (data.username) {
      const existingUser = await prisma.user.findFirst({
        where: {
          username: data.username,
          id: { not: userId }, // Exclude the current user from the search.
        },
      });

      if (existingUser) {
        throw createHttpError(409, "This username is already taken.");
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data,
    });

    logger.info({ userId }, "User profile updated successfully.");
    return sanitizeUser(updatedUser);
  }

  /**
   * Permanently deletes the account of the currently authenticated user.
   * This action is irreversible.
   * @param userId The ID of the user to delete.
   */
  public async deleteOwnAccount(userId: string): Promise<void> {
    // The database schema is set to `onDelete: Cascade`, so deleting the user
    // will automatically delete their associated refresh tokens and exam attempts.
    await prisma.user.delete({
      where: { id: userId },
    });

    logger.warn({ userId }, "User account permanently deleted.");
  }
}

export const userService = new UserService();
