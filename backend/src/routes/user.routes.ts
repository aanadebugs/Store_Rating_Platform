import { Router } from "express";

import { UserRepository } from "../repositories/user.repository";

import { UserService } from "../services/user.service";

import { UserController } from "../controllers/user.controller";

import { authenticationMiddleware } from "../middleware/authentication.middleware";
import { authorizationMiddleware } from "../middleware/authorization.middleware";

import { USER_ROLES } from "../constants/role.constants";

const userRouter = Router();

const userRepository =
  new UserRepository();

const userService =
  new UserService(userRepository);

const userController =
  new UserController(userService);

userRouter.post(
  "/store-owner",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.ADMIN
  ),
  userController.createStoreOwner
);

userRouter.get(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.ADMIN
  ),
  userController.getAllUsers
);

userRouter.get(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.ADMIN
  ),
  userController.getUserById
);

export { userRouter };