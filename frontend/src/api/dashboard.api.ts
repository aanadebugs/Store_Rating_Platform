import { apiClient } from "./axios";

export async function getAdminDashboard() {
  const token =
    localStorage.getItem("accessToken");

  const response =
    await apiClient.get(
      "/dashboard/admin",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}