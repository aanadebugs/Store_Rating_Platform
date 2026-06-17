import { Prisma, User } from "@prisma/client";

import { prismaClient } from "../database/prismaClient";

export class UserRepository {
  async findById(
    id: string
  ): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(
    email: string
  ): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(
    data: Prisma.UserCreateInput
  ): Promise<User> {
    return prismaClient.user.create({
      data,
    });
  }

  async findAll(): Promise<User[]> {
    return prismaClient.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async count(): Promise<number> {
    return prismaClient.user.count();
  }
}