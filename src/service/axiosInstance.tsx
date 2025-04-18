// src/api/axiosInstance.ts
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://be.zd-dev.xyz/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // vẫn giữ
});

// Gắn accessToken từ cookie vào Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
