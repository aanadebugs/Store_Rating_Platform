import { Prisma, Store } from "@prisma/client";

import { prismaClient } from "../database/prismaClient";

export class StoreRepository {
  async findById(
    id: string
  ): Promise<Store | null> {
    return prismaClient.store.findUnique({
      where: {
        id,
      },
    });
  }

  async findByOwnerId(
    ownerId: string
  ): Promise<Store | null> {
    return prismaClient.store.findUnique({
      where: {
        ownerId,
      },
    });
  }

  async findByEmail(
    email: string
  ): Promise<Store | null> {
    return prismaClient.store.findUnique({
      where: {
        email,
      },
    });
  }

  async create(
    data: Prisma.StoreCreateInput
  ): Promise<Store> {
    return prismaClient.store.create({
      data,
    });
  }

  async findAll(): Promise<Store[]> {
    return prismaClient.store.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  async count(): Promise<number> {
  return prismaClient.store.count();
}
}