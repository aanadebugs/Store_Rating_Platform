import { Store } from "@prisma/client";

import { APPLICATION_MESSAGES } from "../constants/application-messages.constants";
import { HTTP_STATUS } from "../constants/http-status.constants";

import { StoreRepository } from "../repositories/store.repository";

import { CreateStoreDto } from "../validations/store.validation";

import { ApiError } from "../utils/api-error";

export class StoreService {
  constructor(
    private readonly storeRepository: StoreRepository
  ) {}

  async createStore(
    ownerId: string,
    data: CreateStoreDto
  ): Promise<Store> {
    const existingStore =
      await this.storeRepository.findByOwnerId(
        ownerId
      );

    if (existingStore) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        "Store owner already owns a store."
      );
    }

    const existingEmail =
      await this.storeRepository.findByEmail(
        data.email
      );

    if (existingEmail) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        "Store email already exists."
      );
    }

    return this.storeRepository.create({
      name: data.name,
      email: data.email,
      address: data.address,
      owner: {
        connect: {
          id: ownerId,
        },
      },
    });
  }

  async getStoreById(
    id: string
  ): Promise<Store> {
    const store =
      await this.storeRepository.findById(id);

    if (!store) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        APPLICATION_MESSAGES.STORE.NOT_FOUND
      );
    }

    return store;
  }

  async getAllStores(): Promise<Store[]> {
    return this.storeRepository.findAll();
  }
}