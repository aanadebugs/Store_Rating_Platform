import { NextFunction, Request, Response } from "express";

import { UserService } from "../services/user.service";

import { createStoreOwnerSchema } from "../validations/user.validation";

import { HTTP_STATUS } from "../constants/http-status.constants";
import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";

export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  createStoreOwner = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data =
        createStoreOwnerSchema.parse(
          request.body
        );

      const user =
        await this.userService.createStoreOwner(
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

  getAllUsers = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const users =
        await this.userService.getAllUsers();

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user =
        await this.userService.getUserById(
          request.params.id as string
        );

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };
}