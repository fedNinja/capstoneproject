import axios from 'axios';

var instance = axios.create({
  baseURL: 'http://localhost:8080/api',
});
export default function setAuthToken(token) {
  if (token) {
    console.log('inside authorization');
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
}
