import GridItem from "../GridItem/GridItem";
import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description, openModal }) => (
  <GridItem>
    <div className={css.thumb}>
      <img
        src={urls.thumb}
        alt={alt_description || "Image"}
        onClick={() => openModal(urls.regular, alt_description)}
      />
    </div>
  </GridItem>
);

export default ImageCard;
