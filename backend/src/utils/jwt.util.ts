import jwt from "jsonwebtoken";

import { environment } from "../config/env";
import { JwtPayload } from "../types/jwt-payload.type";

export function generateAccessToken(
  payload: JwtPayload
): string {
  return jwt.sign(
    payload,
    environment.jwt.secret,
    {
      expiresIn: environment.jwt.expiresIn,
    }
  );
}

export function verifyAccessToken(
  token: string
): JwtPayload {
  return jwt.verify(
    token,
    environment.jwt.secret
  ) as JwtPayload;
}