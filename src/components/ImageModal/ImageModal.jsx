import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
};

Modal.setAppElement("#modal-root");

const ImageModal = ({ modalIsOpen, closeModal, urls, alt_description }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Image Modal"
  >
    <img src={urls} alt={alt_description || "Image"} />
  </Modal>
);

export default ImageModal;
