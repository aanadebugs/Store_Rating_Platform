import { ApiError } from "../utils/api-error";
import { HTTP_STATUS } from "../constants/http-status.constants";

throw new ApiError(
  HTTP_STATUS.NOT_FOUND,
  "Testing custom error"
);