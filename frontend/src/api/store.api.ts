import { apiClient } from "./axios";

export interface CreateStoreRequest {
  name: string;
  email: string;
  address: string;
}

export async function getStores() {
  const token =
    localStorage.getItem("accessToken");

  const response =
    await apiClient.get(
      "/stores",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}

export async function createStore(
  data: CreateStoreRequest
) {
  const token =
    localStorage.getItem("accessToken");

  const response =
    await apiClient.post(
      "/stores",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}