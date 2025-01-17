import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "http://192.168.1.100:8000";

const axiosClient: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     const token = getToken();
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// Response Interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 400) {
      console.log("400: ", error.response);
    }
    if (error.response && error.response.status === 401) {
      console.log("UNAUTHORIZATED", error.response);
    } else if (error.response && error.response.status === 500) {
      console.log(error.response);
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
