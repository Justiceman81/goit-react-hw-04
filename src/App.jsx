import getPhotos from "./apiService/photos";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import Text from "./components/Text/Text";
import { useEffect, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      try {
        const { results, per_page, total_pages } = await getPhotos(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < Math.ceil(total_pages / per_page));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);
  const handleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };
  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {isVisible && (
          <LoadMoreBtn onClick={loadMore} disabled={loading}>
            {loading ? "Loading" : "Load more"}
          </LoadMoreBtn>
        )}
        {!images.length && !isEmpty && (
          <Text textAlign="center">Let`s begin search 🔎</Text>
        )}
        {loading && <Loader />}
        {error && <Text textAlign="center">❌ Something went wrong </Text>}
        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        <ImageModal
          modalIsOpen={showModal}
          closeModal={closeModal}
          src={modalUrl}
          alt={modalAlt}
        />
      </Container>
    </Section>
  );
};
export default App;
