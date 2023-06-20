import axios from 'axios';

export const fetchInstance = () => {
  return axios.create({
    baseURL: 'https://marplify-api.yumekiti.net/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
