// src/api/axiosInstance.ts
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_KOTOBAI_API || "https://be.zd-dev.xyz",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // sends cookies
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken") || Cookies.get("token"); // check both just in case
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (for auto-logout on 401)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;