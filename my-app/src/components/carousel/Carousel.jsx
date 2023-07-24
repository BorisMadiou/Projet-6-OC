import React, { useState } from 'react';
import './carousel.css';

function Carousel({ images, initialIndex }) {
  const [currentImage, setCurrentImage] = useState(initialIndex);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <svg onClick={prevImage} xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
  <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
</svg>
      <img src={images[currentImage]} alt={`${currentImage + 1}`} />
      <svg onClick={nextImage} xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
  <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
</svg>
      <p>{currentImage +1}/{images.length}</p>
    </div>
  );
};

export default Carousel;
