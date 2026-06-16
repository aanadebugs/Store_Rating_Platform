import { UserRole } from "../constants/role.constants";

export interface JwtPayload {
  userId: string;
  role: UserRole;
}