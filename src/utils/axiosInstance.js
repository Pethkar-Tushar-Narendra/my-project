import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "https://digitalmarketingstudiogenix.com/react_task/api",
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("token"); // Or get token from wherever you store it
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
