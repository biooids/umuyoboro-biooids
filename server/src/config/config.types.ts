// src/config/config.types.ts

export interface Config {
  nodeEnv: "development" | "production" | "test";
  port: number;
  databaseUrl: string;
  corsOrigin: string;
  jwt: {
    accessSecret: string;
    accessExpiresInSeconds: number;
    refreshSecret: string;
    refreshExpiresInDays: number;
  };
  cookies: {
    refreshTokenName: string;
  };
  logLevel: string;
}
