import { User } from "@prisma/client";

import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";
import { HTTP_STATUS } from "../constants/http-status.constants";
import { USER_ROLES } from "../constants/role.constants";

import { UserRepository } from "../repositories/user.repository";

import {
  CreateAdminDto,
  CreateStoreOwnerDto,
  LoginDto,
} from "../validations/auth.validation";

import { ApiError } from "../utils/api-error";
import { generateAccessToken } from "../utils/jwt.util";
import {
  hashPassword,
  verifyPassword,
} from "../utils/password.util";

export class AuthService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async createAdmin(
    data: CreateAdminDto
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
      role: USER_ROLES.ADMIN,
    });
  }

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

  async login(
  data: LoginDto
  ): Promise<{
  accessToken: string;
  role: string;
  userId: string;
  }> {
    const user =
      await this.userRepository.findByEmail(
        data.email
      );

    if (!user) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHORIZED,
        APPLICATION_MESSAGES.AUTH.INVALID_CREDENTIALS
      );
    }

    const isPasswordValid =
      await verifyPassword(
        user.passwordHash,
        data.password
      );

    if (!isPasswordValid) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHORIZED,
        APPLICATION_MESSAGES.AUTH.INVALID_CREDENTIALS
      );
    }

    const accessToken =
      generateAccessToken({
        userId: user.id,
        role: user.role as
          | "ADMIN"
          | "STORE_OWNER"
          | "USER",
      });

    return {
      accessToken,
      role:user.role,
      userId: user.id,
    };
  }
}