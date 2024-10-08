import Grid from "../Grid/Grid";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => (
  <Grid>
    {images.map(({ id, urls, alt_description }) => (
      <ImageCard
        key={id}
        urls={urls}
        alt_description={alt_description}
        openModal={openModal}
      />
    ))}
  </Grid>
);

export default ImageGallery;
