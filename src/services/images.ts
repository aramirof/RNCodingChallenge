import { AxiosResponse } from 'axios';
import httpClient from './http-client';
import { store } from '../store/store';
import { Photo } from '../common/models';

async function getImages (): Promise<Photo[]> {
  const token = store.getState().session.token;
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