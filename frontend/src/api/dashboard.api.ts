import { apiClient } from "./axios";

export async function getStoreOwnerDashboard() {
  const token =
    localStorage.getItem(
      "accessToken"
    );

  const response =
    await apiClient.get(
      "/dashboard/store-owner",
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}