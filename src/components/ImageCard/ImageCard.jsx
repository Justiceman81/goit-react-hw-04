// import GridItem from "../GridItem/GridItem";
// import css from "./ImageCard.module.css";
// const ImageCard = ({ image, openModal }) => {
//   return (
//     <GridItem>
//       <div className={css.thumb}>
//         <img
//           src={image.urls.small}
//           alt={image.alt_description}
//           onClick={() => openModal(image.urls.regular, image.alt_description)}
//         />
//       </div>
//     </GridItem>
//   );
// };
// export default ImageCard;
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
