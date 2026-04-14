import apiClient from "./apiClient";

export async function getSupportTickets() {
  const response = await apiClient.get("/support");
  return response.data;
}
