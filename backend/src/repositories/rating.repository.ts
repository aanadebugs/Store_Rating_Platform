import { Prisma, Rating } from "@prisma/client";

import { prismaClient } from "../database/prismaClient";

export class RatingRepository {
  async findUserRating(
    userId: string,
    storeId: string
  ): Promise<Rating | null> {
    return prismaClient.rating.findUnique({
      where: {
        userId_storeId: {
          userId,
          storeId,
        },
      },
    });
  }

  async create(
    data: Prisma.RatingCreateInput
  ): Promise<Rating> {
    return prismaClient.rating.create({
      data,
    });
  }

  async update(
    id: string,
    rating: number
  ): Promise<Rating> {
    return prismaClient.rating.update({
      where: {
        id,
      },
      data: {
        rating,
      },
    });
  }

  async getStoreRatings(
    storeId: string
  ): Promise<Rating[]> {
    return prismaClient.rating.findMany({
      where: {
        storeId,
      },
    });
  }

  async count(): Promise<number> {
    return prismaClient.rating.count();
  }
}