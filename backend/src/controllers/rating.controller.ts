import { NextFunction, Response } from "express";

import { RatingService } from "../services/rating.service";

import {
  createRatingSchema,
  updateRatingSchema,
} from "../validations/rating.validation";

import { HTTP_STATUS } from "../constants/http-status.constants";

import { AuthenticatedRequest } from "../types/authenticated-request.type";

export class RatingController {
  constructor(
    private readonly ratingService: RatingService
  ) {}

  createRating = async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data = createRatingSchema.parse(
        request.body
      );

      const rating =
        await this.ratingService.createRating(
          request.user!.userId,
          data
        );

      response
        .status(HTTP_STATUS.CREATED)
        .json({
          success: true,
          data: rating,
        });
    } catch (error) {
      next(error);
    }
  };

  updateRating = async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data = updateRatingSchema.parse(
        request.body
      );

      const rating =
        await this.ratingService.updateRating(
          request.user!.userId,
          request.params.storeId as string,
          data
        );

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: rating,
      });
    } catch (error) {
      next(error);
    }
  };

  getAverageRating = async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const averageRating =
        await this.ratingService.getAverageRating(
          request.params.storeId as string
        );

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: {
          averageRating,
        },
      });
    } catch (error) {
      next(error);
    }
  };
}