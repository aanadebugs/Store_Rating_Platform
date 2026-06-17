import jwt, { Secret, SignOptions } from "jsonwebtoken";

import { environment } from "../config/env";
import { JwtPayload } from "../types/jwt-payload.type";

export function generateAccessToken(
  payload: JwtPayload
): string {
  const secret: Secret =
    environment.jwt.secret;

  const options: SignOptions = {
    expiresIn:
      environment.jwt.expiresIn as SignOptions["expiresIn"],
  };

  return jwt.sign(
    payload,
    secret,
    options
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