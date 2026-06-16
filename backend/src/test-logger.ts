import "dotenv/config";

import { logger } from "./utils/logger";

logger.info("Logger initialized successfully");

logger.warn("Testing warning log");

logger.error(new Error("Testing error log"));