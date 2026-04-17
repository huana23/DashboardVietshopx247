import React, { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService";
import { getAccessToken, setTokens, removeTokens, getRefreshToken } from "../utils/token";

const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  loading: false,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getAccessToken());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setToken(getAccessToken());
    setLoading(false);
  }, []);

  async function login(credentials) {
    setLoading(true);
    try {
      const data = await authService.login(credentials);
      // expected: { access_token, refresh_token, type }
      setTokens({ access_token: data.access_token, refresh_token: data.refresh_token });
      setToken(data.access_token);
      return data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    // best-effort backend logout using refresh token; await to ensure server invalidates token
    try {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        await authService.logout(refreshToken);
      } else {
        await authService.logout();
      }
    } catch (e) {
      // ignore logout errors
    }

    removeTokens();
    setToken(null);
    // redirect to login
    window.location.href = "/login";
  }

  const providerValue = { isAuthenticated: !!token, token, loading, login, logout };

  return React.createElement(AuthContext.Provider, { value: providerValue }, children);
}

export function useAuth() {
  return useContext(AuthContext);
}
