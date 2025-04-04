/* eslint-disable */

import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
  },
});

export const fetchCities = async ({ query, limit, offset }) => {
  const params = {
    namePrefix: query,
    limit,
    offset,
  };

  const res = await API.get('/cities', { params });
  return res.data;
};
