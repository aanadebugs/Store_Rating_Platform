import express from "express";
import cors from "cors";
import helmet from "helmet";

import { authRouter } from "./routes/auth.routes";

import { errorHandlerMiddleware } from "./middleware/error-handler.middleware";

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);

app.use(errorHandlerMiddleware);

export { app };