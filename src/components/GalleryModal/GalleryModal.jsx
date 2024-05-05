import css from "../Gallery/Gallery.module.css";

const GalleryModal = ({
  images,
  onClose,
  modalClass,
  currentIndex,
  prevImage,
  nextImage,
  imageClass,
}) => {
  return (
    <div
      className={`${css.imageContainer} ${css[modalClass]}`}
      onClick={onClose}
    >
      <button
        className={css.closeButton}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        x
      </button>

      <button
        className={`${css.navigationButton} ${css.previousButton}`}
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        &#8592;
      </button>
      <img
        className={`${css.modalImage} ${imageClass}`}
        src={images[currentIndex].src}
        alt="cat"
      />

      <button
        className={`${css.navigationButton} ${css.nextButton}`}
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default GalleryModal;
