import { NextFunction, Response } from "express";

import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";
import { HTTP_STATUS } from "../constants/http-status.constants";

import { AuthenticatedRequest } from "../types/authenticated-request.type";

import { verifyAccessToken } from "../utils/jwt.util";
import { ApiError } from "../utils/api-error";

export function authenticationMiddleware(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
): void {
  const authorizationHeader =
    request.headers.authorization;

  if (!authorizationHeader) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      APPLICATION_MESSAGES.AUTH.TOKEN_REQUIRED
    );
  }

  const [scheme, token] =
    authorizationHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      APPLICATION_MESSAGES.AUTH.INVALID_TOKEN
    );
  }

  try {
    const payload =
      verifyAccessToken(token);

    request.user = payload;

    next();
  } catch {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      APPLICATION_MESSAGES.AUTH.INVALID_TOKEN
    );
  }
}