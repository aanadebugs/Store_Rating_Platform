import { apiClient } from "./axios";

export interface CreateRatingRequest {
  storeId: string;
  rating: number;
}

export async function createRating(
  data: CreateRatingRequest
) {
  const token =
    localStorage.getItem("accessToken");

  const response =
    await apiClient.post(
      "/ratings",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}

export async function updateRating(
  storeId: string,
  rating: number
) {
  const token =
    localStorage.getItem("accessToken");

  const response =
    await apiClient.put(
      `/ratings/${storeId}`,
      {
        rating,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}

export async function getAverageRating(
  storeId: string
) {
  const token =
    localStorage.getItem("accessToken");

  const response =
    await apiClient.get(
      `/ratings/store/${storeId}/average`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data.data;
}