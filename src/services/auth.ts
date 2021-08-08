import httpClient from './http-client';
import { Credentials } from '../common/models';

interface GetTokenResponse {
  token: string;
}

async function getToken (credentials: Credentials): Promise<string> {
  const response = await httpClient.post('/login', credentials);
  const data: GetTokenResponse = await response.data;
  return data.token;
}

export {
  getToken,
}