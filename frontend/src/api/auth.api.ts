import { apiClient } from "./axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  role: string;
  userId: string;
}

export async function login(
  credentials: LoginRequest
): Promise<LoginResponse> {
  const response = await apiClient.post(
    "/auth/login",
    credentials
  );

  return response.data.data;
}