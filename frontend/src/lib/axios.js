import axios from "axios";

const localURL = "http://localhost:5001/api";
const productionURL = "https://chatting-application-x4jp.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? localURL : productionURL,
  withCredentials: true,
});