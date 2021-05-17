import axios from 'axios';
import { getCookie, getLocaleStorage } from '../lib/session';

const access = getCookie('access');

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { Authorization: `Bearer ${access}` },
});

export default {
  get: service.get,
  post: service.post,
  patch: service.patch,
  delete: service.delete,
};
