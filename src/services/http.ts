import axios from 'axios';
import { API_URL } from './environments/dev';

const axiosInstance = axios.create({
   baseURL: API_URL
});

export { axiosInstance as http };
