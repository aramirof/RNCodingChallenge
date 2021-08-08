import axios from 'axios';
import { BASE_URL } from '@env';

const httpClient = axios.create();

httpClient.defaults.baseURL = BASE_URL;

httpClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

//All request will wait 2 seconds before timeout
httpClient.defaults.timeout = 2000;

httpClient.defaults.withCredentials = true;

/* httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      
    }
  return Promise.reject(error);
}); */

export default httpClient;