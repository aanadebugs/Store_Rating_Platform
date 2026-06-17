import { NextFunction, Response } from "express";

import { StoreService } from "../services/store.service";

import { createStoreSchema } from "../validations/store.validation";

import { HTTP_STATUS } from "../constants/http-status.constants";

import { AuthenticatedRequest } from "../types/authenticated-request.type";

export class StoreController {
  constructor(
    private readonly storeService: StoreService
  ) {}

  createStore = async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data =
        createStoreSchema.parse(
          request.body
        );

      const store =
        await this.storeService.createStore(
          request.user!.userId,
          data
        );

      response
        .status(HTTP_STATUS.CREATED)
        .json({
          success: true,
          data: store,
        });
    } catch (error) {
      next(error);
    }
  };

  getAllStores = async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const stores =
        await this.storeService.getAllStores();

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: stores,
      });
    } catch (error) {
      next(error);
    }
  };

  getStoreById = async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const store =
        await this.storeService.getStoreById(
          request.params.id
        );

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: store,
      });
    } catch (error) {
      next(error);
    }
  };
}