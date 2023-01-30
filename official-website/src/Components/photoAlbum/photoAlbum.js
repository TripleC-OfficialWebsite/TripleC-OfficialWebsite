import "./photoAlbum.css";
import React, { useState } from "react";
import photoAlbumJson from "../../Content/home.json";
import logo from "./logo.png";
import logo123 from "./public/images/logo123.png"

//import Carousel from '@sefailyasoz/react-carousel';

const images = [
  { src: "https://picsum.photos/200/300", alt: "image1" },
  //{ src: logo123, alt: "image2" },
  { src: logo, alt: "image5" }
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
          &lt;
        </button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="carousel-img"
      />
        <button className="carousel-next" onClick={handleNext}>
          &gt;
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
