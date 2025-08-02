import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(image => (
        <PhotosGalleryItem
          key={image.id}
          avg_color={image.avg_color}
          alt={image.alt}
          src={image.src}
        />
      ))}
    </Grid>
  );
};
