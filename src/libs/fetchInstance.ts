import axios from 'axios';

export const fetchInstance = () => {
  return axios.create({
    baseURL: 'https://markdown-to-marp-converter-api-production.up.railway.app',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
