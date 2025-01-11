import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getToken } from "@/utils/tokenActions";

const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    let token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Authorization = "No Auth";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); // Çıkış işlemi
    } else if (error.response && error.response.status === 500) {
      console.log(error.response);
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
