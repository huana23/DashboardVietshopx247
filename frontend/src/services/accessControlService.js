import apiClient from "./apiClient";

export async function getAccessControlPolicies() {
  const response = await apiClient.get("/access-control");
  return response.data;
}
