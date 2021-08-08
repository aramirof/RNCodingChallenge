import { useState, useCallback } from 'react';
import { Photo } from './models';
import { getImages } from '../services/images';

type UsePhotosHook = () => [
  () => Promise<any>,
  boolean,
  Error | undefined,
  Photo[] | undefined,
];

const usePhotos: UsePhotosHook = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [photos, setPhotos] = useState<Photo[] | undefined>();

  const execRequest = async () => {
    try {
      setPhotos(undefined);
      setError(undefined);
      setLoading(true);
      let photos = await getImages();
      setPhotos(photos);
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
    photos,
  ]

}

export default usePhotos;