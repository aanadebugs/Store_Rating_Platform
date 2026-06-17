import { User } from "@prisma/client";

import { USER_ROLES } from "../constants/role.constants";
import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";
import { HTTP_STATUS } from "../constants/http-status.constants";

import { UserRepository } from "../repositories/user.repository";

import { CreateStoreOwnerDto } from "../validations/user.validation";

import { ApiError } from "../utils/api-error";
import { hashPassword } from "../utils/password.util";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async createStoreOwner(
    data: CreateStoreOwnerDto
  ): Promise<User> {
    const existingUser =
      await this.userRepository.findByEmail(
        data.email
      );

    if (existingUser) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        APPLICATION_MESSAGES.USER.EMAIL_ALREADY_EXISTS
      );
    }

    const passwordHash =
      await hashPassword(data.password);

    return this.userRepository.create({
      fullName: data.fullName,
      email: data.email,
      passwordHash,
      address: data.address,
      role: USER_ROLES.STORE_OWNER,
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(
    id: string
  ): Promise<User> {
    const user =
      await this.userRepository.findById(id);

    if (!user) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        APPLICATION_MESSAGES.USER.NOT_FOUND
      );
    }

    return user;
  }

  async getUserCount(): Promise<number> {
    return this.userRepository.count();
  }
}