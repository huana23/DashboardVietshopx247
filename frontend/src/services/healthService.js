import apiClient from "./apiClient";

export async function getSystemHealth() {
  const response = await apiClient.get("/health");
  return response.data;
}
