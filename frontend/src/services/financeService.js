import apiClient from "./apiClient";

export async function getFinanceOverview() {
  const response = await apiClient.get("/finance");
  return response.data;
}
