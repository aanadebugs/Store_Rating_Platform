import { Router } from "express";

import { UserRepository } from "../repositories/user.repository";
import { StoreRepository } from "../repositories/store.repository";
import { RatingRepository } from "../repositories/rating.repository";

import { DashboardService } from "../services/dashboard.service";

import { DashboardController } from "../controllers/dashboard.controller";

import { authenticationMiddleware } from "../middleware/authentication.middleware";
import { authorizationMiddleware } from "../middleware/authorization.middleware";

import { USER_ROLES } from "../constants/role.constants";

const dashboardRouter = Router();

const dashboardService =
  new DashboardService(
    new UserRepository(),
    new StoreRepository(),
    new RatingRepository()
  );

const dashboardController =
  new DashboardController(
    dashboardService
  );

dashboardRouter.get(
  "/admin",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.ADMIN
  ),
  dashboardController.getAdminDashboard
);

dashboardRouter.get(
  "/store-owner",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.STORE_OWNER
  ),
  dashboardController.getStoreOwnerDashboard
);

export { dashboardRouter };