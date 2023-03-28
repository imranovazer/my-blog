import axios from "axios";
export const Axios = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("token") && localStorage.getItem("token")
    }`,
  },
});
