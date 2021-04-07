import { decodeValue, encodeValue } from '../utils';

export const setCookie = () => {};

export const removeCookie = () => {};

export const getCookie = () => {};

export const getCookieFromBrowser = () => {};

export const getCookieFromServer = () => {};

export const setLocaleStorage = (key, value) => {
  if (process.browser) {
    window.localStorage.setItem(key, encodeValue(value));
  }
};

export const getLocaleStorage = (key) => {
  if (process.browser) {
    window.localStorage.getItem(key);
    return decodeValue(key);
  }
  return null;
};

export const removeLocaleStorage = (key) => {
  if (process.browser) {
    window.localStorage.removeItem(key);
  }
};

export const getJwt = () => {
  return getLocaleStorage('token');
};

export const isAuthenticated = () => !!getJwt();

export const redirectIfAuthenticated = () => {};

export const redirectIfNotAuthenticated = () => {};
