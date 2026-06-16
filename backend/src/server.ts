import { app } from "./app";

import { connectDatabase } from "./database/prismaClient";

import { environment } from "./config/env";
import { logger } from "./utils/logger";

async function startServer(): Promise<void> {
  try {
    await connectDatabase();

    app.listen(
      environment.server.port,
      () => {
        logger.info(
          `Server running on port ${environment.server.port}`
        );
      }
    );
  } catch (error) {
    logger.error(error);

    process.exit(1);
  }
}

startServer();