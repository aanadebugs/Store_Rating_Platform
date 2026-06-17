import { apiClient } from "./axios";

export async function getUsers() {
  const token =
    localStorage.getItem("accessToken");

  const response =
    await apiClient.get(
      "/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}