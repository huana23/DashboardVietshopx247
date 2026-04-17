import apiClient from "./apiClient";

// Auth service: login / refresh / logout
// Assumptions:
// - Login endpoint: POST /auth/login  body: { username, password }
// - Refresh endpoint: POST /auth/refresh body: { refresh_token }
// - Logout endpoint (optional): POST /auth/logout
// Backend returns { access_token, refresh_token, type }

export async function login({ username, password }) {
  const response = await apiClient.post(
    "/auth/login",
    { username, password },
    { headers: { "Skip-Auth": "true" } }
  );
  return response.data;
}

export async function refreshToken(refresh_token) {
  const response = await apiClient.post(
    "/auth/refresh",
    { refresh_token },
    { headers: { "Skip-Auth": "true" } }
  );
  return response.data;
}

export async function logout(refresh_token) {
  try {
    // Use post with body (axios supports data in config)
    const response = await apiClient.post(
      "/auth/logout",
      { refresh_token },
      { headers: { "Skip-Auth": "true" } }
    );
    return response.data;
  } catch (err) {
    // ignore logout errors
  }
}
