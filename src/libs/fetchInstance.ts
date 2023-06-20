import axios from 'axios';

export const fetchInstance = () => {
  return axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
