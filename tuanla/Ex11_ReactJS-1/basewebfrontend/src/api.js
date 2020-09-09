import axios from "axios";

const API_URL = "http://localhost:8080/api/";

export const axiosPost = (url, data) => {
  return axios.post(API_URL + url, data, {
    headers: {
      "content-type": "application/json",
    },
  });
};

export const axiosGet = (url) => {
  return axios.get(API_URL + url, {
    headers: {
      "content-type": "application/json",
    },
  });
};
