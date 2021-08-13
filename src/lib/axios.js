import axios from 'axios';

// Create axios instance
const instance = axios.create({ baseURL: '/' });

instance.interceptors.response.use(
  config => config,
  error => {
    return Promise.reject(error);
  },
);

export default instance;
