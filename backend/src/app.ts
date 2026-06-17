import express from "express";
import cors from "cors";
import helmet from "helmet";

import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/user.routes";
import { storeRouter } from "./routes/store.routes";
import { ratingRouter } from "./routes/rating.routes";
import { dashboardRouter } from "./routes/dashboard.routes";

import { errorHandlerMiddleware } from "./middleware/error-handler.middleware";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/stores", storeRouter);
app.use("/api/ratings", ratingRouter);
app.use("/api/dashboard", dashboardRouter);

app.use(errorHandlerMiddleware);

export { app };