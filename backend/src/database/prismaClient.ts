import { PrismaClient } from "@prisma/client";

import { logger } from "../utils/logger";

const prismaClient = new PrismaClient();

async function connectDatabase(): Promise<void> {
  try {
    await prismaClient.$connect();

    logger.info("Database connection established");
  } catch (error) {
    logger.error(error);

    process.exit(1);
  }
}

export { prismaClient, connectDatabase };