import axios from "axios";
import Cookies from "js-cookie";
import { logout } from "../store/userSlice";
import store from "../store";

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

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Dispatch logout action on 401 Unauthorized
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default instance;
