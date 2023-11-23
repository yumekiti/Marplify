import axios from 'axios';

export const fetchInstance = () => {
  return axios.create({
    baseURL: 'https://marplify-api.yumekiti.net/',
    // baseURL: 'http://localhost:8000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
