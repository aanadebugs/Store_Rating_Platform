import path from "path";
import winston from "winston";

import { environment } from "../config/env";

const logsDirectory = path.resolve(process.cwd(), "logs");

const logFormat = winston.format.combine(
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  winston.format.errors({
    stack: true,
  }),
  winston.format.printf(
    ({ timestamp, level, message, stack }) => {
      const logMessage = stack ?? message;

      return `[${timestamp}] ${level.toUpperCase()}: ${logMessage}`;
    }
  )
);

export const logger = winston.createLogger({
  level: environment.logging.level,

  format: logFormat,

  transports: [
    new winston.transports.File({
      filename: path.join(logsDirectory, "error.log"),
      level: "error",
    }),

    new winston.transports.File({
      filename: path.join(logsDirectory, "application.log"),
    }),
  ],
});

if (environment.server.nodeEnv !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        logFormat
      ),
    })
  );
}