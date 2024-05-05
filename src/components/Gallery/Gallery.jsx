import css from "./Gallery.module.css";

const Gallery = ({ images, handleClick }) => {
  return (
    <div className={css.catContainer}>
      <h1 className={css.catTitle}>Cat lowers😻</h1>
      <ul className={css.catList}>
        {images.map((image, index) => (
          <li className={css.catItem} key={image.id}>
            <a
              href={image.src}
              onClick={(e) => {
                e.preventDefault();
                handleClick(index);
              }}
            >
              <img src={image.src} alt="cat" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
