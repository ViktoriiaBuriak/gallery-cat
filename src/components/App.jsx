import Gallery from "./Gallery/Gallery";
import "./App.css";
import css from "./Gallery/Gallery.module.css";
import { useState } from "react";
import { useEffect } from "react";
import GalleryModal from "./GalleryModal/GalleryModal";
import cat1 from "./images/cat-1.jpg";
import cat2 from "./images/cat-2.jpg";
import cat3 from "./images/cat-3.jpg";
import cat4 from "./images/cat-4.jpg";
import cat5 from "./images/cat-5.jpg";
import cat6 from "./images/cat-6.jpg";
import cat7 from "./images/cat-7.jpg";
import cat8 from "./images/cat-8.jpg";
import cat9 from "./images/cat-9.jpg";
import cat10 from "./images/cat-10.jpg";

function App() {
const images = [
  { src: cat1, id: "1111" },
  { src: cat2, id: "1112" },
  { src: cat3, id: "1113" },
  { src: cat4, id: "1114" },
  { src: cat5, id: "1115" },
  { src: cat6, id: "1116" },
  { src: cat7, id: "1117" },
  { src: cat8, id: "1118" },
  { src: cat9, id: "1119" },
  { src: cat10, id: "1110" },
];
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageClass, setImageClass] = useState("");
  const [modalClass, setModalClass] = useState("");

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageClass("");
    setTimeout(() => setImageClass(css.imagePrevious), 10);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageClass("");
    setTimeout(() => setImageClass(css.imageNext), 10);
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
    setModalClass("opened");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalClass("closed");
    setImageClass("");
    setTimeout(() => {
      setShowModal(false);
      setModalClass("");
    }, 250);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <Gallery handleClick={handleClick} images={images}/>
      {showModal && (
        <GalleryModal
          images={images}
          onClose={handleCloseModal}
          modalClass={modalClass}
          currentIndex={currentIndex}
          prevImage={prevImage}
          nextImage={nextImage}
          imageClass={imageClass}
        />
      )}
    </>
  );
}

export default App;
