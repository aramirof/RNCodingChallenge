import { useState, useCallback } from 'react';
import { Photo } from './models';
import { getImages } from '../services/images';
import { useAppDispatch } from '../store/hooks';
import { setList, clean } from '../store/slices/photos';

type UsePhotosHook = () => [
  () => Promise<any>,
  boolean,
  Error | undefined,
];

const usePhotos: UsePhotosHook = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const dispatch = useAppDispatch();

  const execRequest = async () => {
    try {
      dispatch(clean())
      setError(undefined);
      setLoading(true);
      let photos = await getImages();
      dispatch(setList(photos))
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
  ]

}

export default usePhotos;