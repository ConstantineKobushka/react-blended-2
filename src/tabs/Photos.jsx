import { useEffect, useState } from 'react';

import { Button, Form, Loader, PhotosGallery, Text } from 'components';

import { getPhotos } from 'apiService/photos';

export const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResalt, setTotalResalt] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(true);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        setMessage(false);
        const data = await getPhotos(query, page);
        console.log(data);
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
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  function onSearchHandler(searchValue) {
    setQuery(searchValue);
    setPage(1);
  }

  function onLoadMoreHandler() {
    console.log(images.length);
    setPage(page + 1);
  }

  return (
    <>
      <Form onSubmit={onSearchHandler} />
      {loading && <Loader />}
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
