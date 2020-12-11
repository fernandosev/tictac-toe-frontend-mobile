import axios from "axios";

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: "http://192.168.100.6:8080",
});

export default api;
