import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-app-burger-23875.firebaseio.com/',
});

export default instance;
