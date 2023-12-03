import axios from 'axios';

export const fetchInstance = () => {
  if (typeof window === 'undefined') return axios.create();
  return axios.create({
    baseURL: `${location.origin}/api`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const fetchInstanceWithToken = (token: string) => {
  if (typeof window === 'undefined') return axios.create();
  return axios.create({
    baseURL: `${location.origin}/api`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
