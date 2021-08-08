import { useState } from 'react';
import { Credentials } from './models';
import { getToken } from '../services/auth';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/slices/session';

type UseLoginHook = () => [
  (credentials: Credentials) => Promise<any>,
  boolean,
  Error | undefined,
];

const useLogin: UseLoginHook = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const dispatch = useAppDispatch();

  const execRequest = async (credentials: Credentials) => {
    try {
      setError(undefined);
      setLoading(true);
      let token = await getToken(credentials);
      setLoading(false);
      dispatch(login(token));
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  }

  return [
    execRequest,
    loading,
    error,
  ]

}

export default useLogin;