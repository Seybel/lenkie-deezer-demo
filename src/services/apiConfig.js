import axios from "axios";

const PROXY_URL = "https://cors-anywhere.herokuapp.com";
const BASE_URL = "https://api.deezer.com";

export const http = axios.create({
  baseURL: `${PROXY_URL}/${BASE_URL}`,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const apiConfig = {
    appId: import.meta.env.VITE_APP_ID,
    appKey: import.meta.env.VITE_APP_API_KEY,
    apiSecret: import.meta.env.VITE_APP_API_SECRET,
    apiUrl: `${PROXY_URL}/${BASE_URL}`,
};