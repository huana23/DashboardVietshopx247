import apiClient from "./apiClient";

export async function getPartners() {
  const response = await apiClient.get("/partners");
  return response.data;
}
