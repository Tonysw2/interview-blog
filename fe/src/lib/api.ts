import { storageKeys } from "@/config/storage-keys";
import axios from "axios";
import { redirect } from "react-router-dom";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(storageKeys.token);

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use((response) => {
  if (response.status === 401) {
    localStorage.removeItem(storageKeys.token);
    redirect("/sign-in");
    return response;
  }

  return response;
});
