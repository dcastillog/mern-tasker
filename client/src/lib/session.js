import { decodeValue, encodeValue } from '../utils';
import redirect from './redirect';

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
    const value = window.localStorage.getItem(key);
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
  return getLocaleStorage('tokens');
};

export const isAuthenticated = () => !!getJwt();

export const redirectIfAuthenticated = () => {
  if (isAuthenticated()) {
    redirect('/home');
    return true;
  }
  return false;
};

export const redirectIfNotAuthenticated = () => {
  if (!isAuthenticated()) {
    redirect('/login');
    return true;
  }
  return false;
};
