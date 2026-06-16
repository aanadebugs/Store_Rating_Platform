import { NextFunction, Request, Response } from "express";

import { HTTP_STATUS } from "../constants/http-status.constants";
import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";
import { ApiError } from "../utils/api-error";
import { logger } from "../utils/logger";

export function errorHandlerMiddleware(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  if (error instanceof ApiError) {
    response.status(error.statusCode).json({
      success: false,
      message: error.message,
    });

    return;
  }

  logger.error(error);

  response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: APPLICATION_MESSAGES.COMMON.INTERNAL_SERVER_ERROR,
  });
}