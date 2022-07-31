import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000,
});

export default api;
