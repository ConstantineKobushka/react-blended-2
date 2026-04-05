import { useEffect, useState } from 'react';

import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { getPhotos } from '../apiService/photos';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalResalt, setTotalResalt] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(true);

  useEffect(() => {
    if (!query.trim()) return;
    let isActive = true;

    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        setMessage(false);
        const data = await getPhotos(query, page);
        if (data.photos.length === 0) throw new Error('Photos not found');
        if (page === 1) {
          setImages(data.photos);
        } else {
          setImages(prevState => {
            return [...prevState, ...data.photos];
          });
        }
        setTotalResalt(data.total_results);
      } catch (error) {
        if (!isActive) return;
        setError(error.message);
      } finally {
        if (isActive) setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      isActive = false;
    };
  }, [query, page]);

  function onSearchHandler(searchValue) {
    setImages([]);
    setQuery(searchValue);
    setPage(1);
  }

  function onLoadMoreHandler() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      <Form onSubmit={onSearchHandler} />
      {isLoading && <Loader />}
      {message && <Text textAlign="center">Let`s begin search 🔎</Text>}

      {error ? (
        <Text textAlign="center">{error}</Text>
      ) : (
        <PhotosGallery images={images} />
      )}
      {images.length > 0 && images.length < totalResalt && !error && (
        <Button onClick={onLoadMoreHandler}>Load more</Button>
      )}
    </>
  );
};

export default Photos;
