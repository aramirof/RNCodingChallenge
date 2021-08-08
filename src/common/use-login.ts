import { useState, useCallback } from 'react';
import { Credentials } from './models';
import { getToken } from '../services/auth';

type UseLoginHook = () => [
  (credentials: Credentials) => Promise<any>,
  boolean,
  Error | undefined,
  string | undefined,
];

const useLogin: UseLoginHook = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [token, setToken] = useState<string | undefined>(undefined);

  const execRequest = async (credentials: Credentials) => {
    try {
      setToken(undefined);
      setError(undefined);
      setLoading(true);
      let token = await getToken(credentials);
      console.log(token);
      setToken(token);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return [
    execRequest,
    loading,
    error,
    token,
  ]

}

export default useLogin;