import Axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

const authRequestInterceptor = (config) => {
  config.headers.Accept = "application/json";

  return config;
};

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
