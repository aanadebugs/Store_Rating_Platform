import { NextFunction, Request, Response } from "express";

import { AuthService } from "../services/auth.service";

import {
  createAdminSchema,
  loginSchema,
} from "../validations/auth.validation";

import { HTTP_STATUS } from "../constants/http-status.constants";
import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";

export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  login = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data = loginSchema.parse(
        request.body
      );

      const result =
        await this.authService.login(data);

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  createAdmin = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data =
        createAdminSchema.parse(
          request.body
        );

      const user =
        await this.authService.createAdmin(
          data
        );

      response
        .status(HTTP_STATUS.CREATED)
        .json({
          success: true,
          message:
            APPLICATION_MESSAGES.USER.CREATED,
          data: user,
        });
    } catch (error) {
      next(error);
    }
  };
}