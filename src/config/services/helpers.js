import Axios from 'axios';
const baseUrl = 'https://api.kawalcorona.com/indonesia';

export const http = Axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

export const httpToken = (token) => {
  return Axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
