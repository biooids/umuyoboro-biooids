//src/config/index.ts
import { Config } from "./config.types.js"; // <-- Import type from new file

/**
 * Helper to get and validate environment variables.
 */
const getEnvVariable = (key: string, required: boolean = true): string => {
  const value = process.env[key];
  if (!value && required) {
    // Just throw the error. Logging will happen at the top level.
    throw new Error(
      `❌ Fatal Error: Missing required environment variable ${key}.`
    );
  }
  return value || "";
};

/**
 * Helper to get and validate environment variables as integers.
 */
const getEnvVariableAsInt = (key: string, required: boolean = true): number => {
  const valueStr = process.env[key];
  if (!valueStr && required) {
    throw new Error(
      `❌ Fatal Error: Missing required environment variable ${key}.`
    );
  }
  if (!valueStr) return NaN;

  const intValue = parseInt(valueStr, 10);
  if (isNaN(intValue)) {
    throw new Error(
      `❌ Fatal Error: Invalid integer format for environment variable ${key}. Value: "${valueStr}"`
    );
  }
  return intValue;
};

let config: Config;

// This try/catch is now in server.ts, where the logger is available.
// We directly export the built config object.
try {
  config = {
    nodeEnv: getEnvVariable("NODE_ENV") as
      | "development"
      | "production"
      | "test",
    port: getEnvVariableAsInt("PORT"),
    databaseUrl: getEnvVariable("DATABASE_URL"),
    corsOrigin: getEnvVariable("CORS_ORIGIN"),

    jwt: {
      accessSecret: getEnvVariable("ACCESS_TOKEN_SECRET"),
      accessExpiresInSeconds: getEnvVariableAsInt(
        "ACCESS_TOKEN_EXPIRES_IN_SECONDS"
      ),
      refreshSecret: getEnvVariable("REFRESH_TOKEN_SECRET"),
      refreshExpiresInDays: getEnvVariableAsInt(
        "REFRESH_TOKEN_EXPIRES_IN_DAYS"
      ),
    },

    cookies: {
      refreshTokenName: "jid",
    },

    logLevel: getEnvVariable("LOG_LEVEL", false) || "info",
  };
} catch (error) {
  // We log the error here before exiting to ensure it's visible.
  console.error(error);
  process.exit(1);
}

export { config };
