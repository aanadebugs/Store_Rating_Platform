import express from "express";
import cors from "cors";
import helmet from "helmet";

import { authRouter } from "./routes/auth.routes";
import { userRouter } fromapp.use("/api/users", userRouter); "./routes/user.routes";
import { errorHandlerMiddleware } from "./middleware/error-handler.middleware";
import { storeRouter } from "./routes/store.routes";
const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);

app.use(errorHandlerMiddleware);

app.use("/api/stores", storeRouter);

export { app };