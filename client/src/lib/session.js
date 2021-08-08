// import Cookies from 'js-cookie';
// import { decodeValue, encodeValue } from '../utils';
// import redirect from './redirect';

// export const setCookie = (key, value, expires, days = 1) => {
//   if (process.browser) {
//     const today = new Date();
//     const resultDate = new Date(today);
//     const expiresDate = new Date(expires);
//     resultDate.setDate(today.getDate() + days);

//     Cookies.set(key, encodeValue(value), {
//       expires: expiresDate,
//       path: '/',
//     });
//   }
// };

// export const removeCookie = (key) => {
//   if (process.browser) {
//     Cookies.remove(key, {
//       expires: 1,
//     });
//   }
// };

// export const getCookie = (key, req) => {
//   return process.browser ? getCookieFromBrowser(key) : req ? getCookieFromServer(key, req) : null;
// };

// const getCookieFromBrowser = (key) => {
//   return decodeValue(Cookies.get(key));
// };

// const getCookieFromServer = (key, req) => {
//   if (!req.headers.cookie) {
//     return undefined;
//   }
//   const rawCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${key}=`));
//   if (!rawCookie) {
//     return undefined;
//   }
//   return rawCookie.split('=')[1];
// };

// export const setLocaleStorage = (key, value) => {
//   if (process.browser) {
//     window.localStorage.setItem(key, encodeValue(value));
//   }
// };

// export const getLocaleStorage = (key) => {
//   if (process.browser) {
//     const value = window.localStorage.getItem(key);
//     return decodeValue(value);
//   }
//   return null;
// };

// export const removeLocaleStorage = (key) => {
//   if (process.browser) {
//     window.localStorage.removeItem(key);
//   }
// };

// export const getJwt = () => {
//   // return getLocaleStorage('tokens');
//   return getCookie('access');
// };

// export const isAuthenticated = () => !!getJwt();
