import axiosClient from '../config/axios';

export const getToken = (token) => {};

export const setToken = (token) => {
  if (token) {
    axiosClient.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosClient.defaults.headers.common['x-auth-token'];
  }
};

export const removeToken = () => {};
