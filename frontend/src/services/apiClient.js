import axios from "axios";
import { getAccessToken, getRefreshToken, setTokens, removeTokens } from "../utils/token";

const baseURL = import.meta.env.VITE_API_URL || "";

const apiClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach access token to requests unless explicitly skipped
apiClient.interceptors.request.use(
  (config) => {
    if (
      config.headers &&
      (config.headers["Skip-Auth"] === "true" || config.headers["Skip-Auth"] === true)
    ) {
      // remove the header before sending
      delete config.headers["Skip-Auth"];
      return config;
    }

    const token = getAccessToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor with refresh-token retry
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message || error?.message || "Có lỗi khi kết nối đến hệ thống.";

    // Try refresh token once on 401
    if (status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const refreshResp = await axios.post(
            `${baseURL}/auth/refresh`,
            { refresh_token: refreshToken },
            { headers: { "Content-Type": "application/json" } }
          );

          const data = refreshResp.data;
          if (data?.access_token) {
            setTokens({ access_token: data.access_token, refresh_token: data.refresh_token });
            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers["Authorization"] = `Bearer ${data.access_token}`;
            return apiClient(originalRequest);
          }
        } catch (refreshErr) {
          removeTokens();
          window.location.href = "/login";
          return Promise.reject(refreshErr);
        }
      } else {
        removeTokens();
        window.location.href = "/login";
      }
    }

    return Promise.reject(new Error(message));
  }
);

export default apiClient;
