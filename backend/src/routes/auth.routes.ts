import { Router } from "express";

import { UserRepository } from "../repositories/user.repository";

import { AuthService } from "../services/auth.service";

import { AuthController } from "../controllers/auth.controller";

const authRouter = Router();

const userRepository =
  new UserRepository();

const authService =
  new AuthService(userRepository);

const authController =
  new AuthController(authService);

authRouter.post(
  "/login",
  authController.login
);

authRouter.post(
  "/admin",
  authController.createAdmin
);

authRouter.post(
  "/register",
  authController.createUser
);

export { authRouter };