import GridItem from "../GridItem/GridItem";
import css from "./ImageCard.module.css";
const ImageCard = ({ urls, alt_description, openModal }) => {
  return (
    <GridItem>
      <div className={css.thumb}>
        <img
          src={urls}
          alt={alt_description}
          onClick={() => openModal(urls, alt_description)}
        />
      </div>
    </GridItem>
  );
};
export default ImageCard;
