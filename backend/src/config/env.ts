import "dotenv/config";
import { z } from "zod";

const environmentSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.coerce.number().int().positive(),

  DATABASE_URL: z.string().min(1),

  JWT_SECRET: z.string().min(16),
  JWT_EXPIRES_IN: z.string().min(1),

  LOG_LEVEL: z.enum([
    "error",
    "warn",
    "info",
    "http",
    "verbose",
    "debug",
    "silly",
  ]),
});

const parsedEnvironment = environmentSchema.safeParse(process.env);

if (!parsedEnvironment.success) {
  console.error("Invalid environment configuration");
  console.error(parsedEnvironment.error.flatten().fieldErrors);

  process.exit(1);
}

const environmentVariables = parsedEnvironment.data;

export const environment = {
  server: {
    nodeEnv: environmentVariables.NODE_ENV,
    port: environmentVariables.PORT,
  },

  database: {
    url: environmentVariables.DATABASE_URL,
  },

  jwt: {
    secret: environmentVariables.JWT_SECRET,
    expiresIn: environmentVariables.JWT_EXPIRES_IN,
  },

  logging: {
    level: environmentVariables.LOG_LEVEL,
  },
} as const;