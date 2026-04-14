import apiClient from "./apiClient";

export async function getMarketingPerformance() {
  const response = await apiClient.get("/marketing");
  return response.data;
}
