import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
export const TIMEOUT = Number(import.meta.env.VITE_TIMEOUT_MS ?? 10000);

export const PUBLIC = import.meta.env.VITE_PUBLIC_API_URL ?? "/v1/public/client/";
export const PRIVATE = import.meta.env.VITE_PRIVATE_API_URL ?? "/v1/client/";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  timeout: TIMEOUT,
  validateStatus: (status) => status < 500
});

export const ping = async () => {
  const { data } = await http.get("/ping");
  return data?.data?.service === "bank-service is online";
};