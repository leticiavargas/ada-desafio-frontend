import axios from "axios";
import { getToken, clearToken } from './auth';

const api = axios.create({
  baseURL: "http://0.0.0.0:5000/",
});

api.interceptors.request.use(async config => {
  if (config.url !== 'login') {
    const token = await getToken();
    if (token)
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(response => response, error => {
  if (error.response?.status === 401) {
    clearToken();
    return api.request(error.config);
  }
  return Promise.reject(error);
});

export default api;