import Grid from "../Grid/Grid";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <Grid>
      {images.map(({ id, urls, alt_description }) => (
        <ImageCard
          key={id}
          src={urls}
          alt={alt_description}
          openModal={openModal}
        />
      ))}
    </Grid>
  );
};
export default ImageGallery;
