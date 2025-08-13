// src/db/reset.ts

import bcrypt from "bcryptjs";
import prisma from "./prisma.js";

/**
 * A script to reset the database to a clean state.
 * It clears the User and RefreshToken collections and seeds an admin user
 * if the corresponding environment variables are provided.
 */
async function main() {
  console.log("Starting database reset...");

  // Clear existing data
  await prisma.refreshToken.deleteMany({});
  console.log("Cleared RefreshToken collection.");
  await prisma.user.deleteMany({});
  console.log("Cleared User collection.");

  // Seed the admin user if credentials are in the environment
  if (
    process.env.ADMIN_USERNAME &&
    process.env.ADMIN_PHONE &&
    process.env.ADMIN_PASSWORD
  ) {
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    await prisma.user.create({
      data: {
        username: process.env.ADMIN_USERNAME,
        phone: process.env.ADMIN_PHONE,
        hashedPassword: hashedPassword,
        role: "SUPER_ADMIN", // Explicitly set role for admin
      },
    });
    console.log("Seeded admin user. ✅");
  } else {
    console.warn("Admin user credentials not found in .env, skipping seed.");
  }

  console.log("Database reset complete. ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Disconnect the shared client
    await prisma.$disconnect();
  });
