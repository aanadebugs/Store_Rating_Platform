import { Rating } from "@prisma/client";

import { RatingRepository } from "../repositories/rating.repository";

import {
  CreateRatingDto,
  UpdateRatingDto,
} from "../validations/rating.validation";

import { ApiError } from "../utils/api-error";

import { HTTP_STATUS } from "../constants/http-status.constants";

export class RatingService {
  constructor(
    private readonly ratingRepository: RatingRepository
  ) {}

  async createRating(
    userId: string,
    data: CreateRatingDto
  ): Promise<Rating> {
    const existingRating =
      await this.ratingRepository.findUserRating(
        userId,
        data.storeId
      );

    if (existingRating) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        "User already rated this store."
      );
    }

    return this.ratingRepository.create({
      rating: data.rating,
      user: {
        connect: {
          id: userId,
        },
      },
      store: {
        connect: {
          id: data.storeId,
        },
      },
    });
  }

  async updateRating(
    userId: string,
    storeId: string,
    data: UpdateRatingDto
  ): Promise<Rating> {
    const rating =
      await this.ratingRepository.findUserRating(
        userId,
        storeId
      );

    if (!rating) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "Rating not found."
      );
    }

    return this.ratingRepository.update(
      rating.id,
      data.rating
    );
  }

  async getAverageRating(
    storeId: string
  ): Promise<number> {
    const ratings =
      await this.ratingRepository.getStoreRatings(
        storeId
      );

    if (!ratings.length) {
      return 0;
    }

    const total = ratings.reduce(
      (sum, rating) => sum + rating.rating,
      0
    );

    return Number(
      (total / ratings.length).toFixed(2)
    );
  }

  async getUserRating(
  userId: string,
  storeId: string 
  ): Promise<number | null> {
    const rating =
      await this.ratingRepository.findUserRating(
        userId,
        storeId
      );

    return rating
      ? rating.rating
      : null;
  }
}