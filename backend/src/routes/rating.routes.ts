import { Router } from "express";

import { RatingRepository } from "../repositories/rating.repository";

import { RatingService } from "../services/rating.service";

import { RatingController } from "../controllers/rating.controller";

import { authenticationMiddleware } from "../middleware/authentication.middleware";
import { authorizationMiddleware } from "../middleware/authorization.middleware";

import { USER_ROLES } from "../constants/role.constants";

const ratingRouter = Router();

const ratingRepository =
  new RatingRepository();

const ratingService =
  new RatingService(
    ratingRepository
  );

const ratingController =
  new RatingController(
    ratingService
  );

ratingRouter.post(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.USER
  ),
  ratingController.createRating
);

ratingRouter.put(
  "/:storeId",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.USER
  ),
  ratingController.updateRating
);

ratingRouter.get(
  "/user/:storeId",
  authenticationMiddleware,
  authorizationMiddleware(
    USER_ROLES.USER
  ),
  ratingController.getUserRating
);

ratingRouter.get(
  "/store/:storeId/average",
  authenticationMiddleware,
  ratingController.getAverageRating
);



export { ratingRouter };