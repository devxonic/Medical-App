import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = `https://alanmd-6dc75340d386.herokuapp.com/`;

const ApiHandler = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('accessToken');
      config.headers['Authrization'] = token;
      return config;
    },
    error => error,
  );

  return instance;
};

export default ApiHandler;
