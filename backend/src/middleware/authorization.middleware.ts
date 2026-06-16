import { NextFunction, Response } from "express";

import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";
import { HTTP_STATUS } from "../constants/http-status.constants";

import { AuthenticatedRequest } from "../types/authenticated-request.type";

import { ApiError } from "../utils/api-error";

export function authorizationMiddleware(
  ...allowedRoles: string[]
) {
  return (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ): void => {
    if (!request.user) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHORIZED,
        APPLICATION_MESSAGES.AUTH.ACCESS_DENIED
      );
    }

    if (
      !allowedRoles.includes(
        request.user.role
      )
    ) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        APPLICATION_MESSAGES.AUTH.ACCESS_DENIED
      );
    }

    next();
  };
}