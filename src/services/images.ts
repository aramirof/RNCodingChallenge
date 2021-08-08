import { AxiosResponse } from 'axios';
import httpClient from './http-client';
import AsyncStorage from '@react-native-community/async-storage';
import { Photo } from '../common/models';

async function getImages (): Promise<Photo[]> {
  const token = await AsyncStorage.getItem('AUTH_TOKEN');
  const response: AxiosResponse = await httpClient.get('/images', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const data: Photo[] = await response.data;
  return data;
}

export {
  getImages,
}