import apiClient from "./apiClient";

export async function getDashboardOverview() {
  const response = await apiClient.get("/dashboard");
  return response.data?.data ?? response.data;
}
