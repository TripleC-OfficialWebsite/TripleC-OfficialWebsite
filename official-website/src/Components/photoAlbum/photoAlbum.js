import "./photoAlbum.css";
import React, { useState } from "react";
import photoAlbumJson from "../../Content/home.json";
//import Carousel from '@sefailyasoz/react-carousel';

const images = [
  { src: "https://picsum.photos/200/300", alt: "image1" },
  { src: "https://picsum.photos/200/400", alt: "image2" },
  { src: "image3.jpg", alt: "image3" },
  { src: "image4.jpg", alt: "image4" },
  { src: "image5.jpg", alt: "image5" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1 >= images.length ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel">
      <button className="carousel-prev" onClick={handlePrev}>
        Prev
      </button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="carousel-img"
      />
      <button className="carousel-next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

//export default Carousel;

const photoAlbum = () => {
  return (
    <div>
      <div id="containerPA">
        <div className="titlePA">
          <h1 className="titlePA">{photoAlbumJson.photoAlbum.titlePA}</h1>
          <h2 className="subtitlePA">{photoAlbumJson.photoAlbum.subtitlePA}</h2>
          <Carousel/>
        </div>
      </div>
    </div>
  );
};

export default photoAlbum;
