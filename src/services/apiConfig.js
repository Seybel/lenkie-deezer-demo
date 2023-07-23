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

export default http;

