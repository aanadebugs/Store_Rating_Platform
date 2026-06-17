import { Router } from "express";

import { StoreRepository } from "../repositories/store.repository";

import { StoreService } from "../services/store.service";

import { StoreController } from "../controllers/store.controller";

import { authenticationMiddleware } from "../middleware/authentication.middleware";
import { authorizationMiddleware } from "../middleware/authorization.middleware";

import { USER_ROLES } from "../constants/role.constants";

const storeRouter = Router();

const storeRepository =
  new StoreRepository();

const storeService =
  new StoreService(storeRepository);

const storeController =
  new StoreController(storeService);

storeRouter.post(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.STORE_OWNER
  ),
  storeController.createStore
);

storeRouter.get(
  "/",
  authenticationMiddleware,
  storeController.getAllStores
);

storeRouter.get(
  "/:id",
  authenticationMiddleware,
  storeController.getStoreById
);

export { storeRouter };