import { JwtPayload } from "../types/jwt-payload.type";
import { USER_ROLES } from "../constants/role.constants";

const payload: JwtPayload = {
  userId: "123",
  role: USER_ROLES.ADMIN,
};
console.log(payload);