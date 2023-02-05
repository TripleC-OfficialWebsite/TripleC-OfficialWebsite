import "./photoAlbum.css";
import React, { useState } from "react";
import photoAlbumJson from "../../Content/home.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// const images = require.context(
//   "../../../public/images/CutePic2",
//   false,
//   /\.(png|jpe?g|svg)$/
// );
// const imageSources = images.keys().map((key) => images(key));

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex(
//       currentIndex + 1 >= imageSources.length ? 0 : currentIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       currentIndex - 1 < 0 ? imageSources.length - 1 : currentIndex - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <button className="carousel-prev" onClick={handlePrev}>
//         &lt;
//       </button>

//       <img
//         src={imageSources[currentIndex]}
//         alt="Image"
//         className="carousel-img"
//       />

//       <button className="carousel-next" onClick={handleNext}>
//         &gt;
//       </button>
//     </div>
//   );
// };

const PaCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      stopOnHover={false}
    >
      {[...Array(photoAlbumJson.photoAlbum.photoPath.numPics).keys()].map(
        (val) => {
          return (
            <div>
              <img
                src={
                  photoAlbumJson.photoAlbum.photoPath.basePath + val + ".png"
                }
                alt="da"
              />
            </div>
          );
        }
      )}
    </Carousel>
  );
};

//export default Carousel;

const PhotoAlbum = () => {
  return (
    <div>
      <div id="containerPA">
        <h1 className="titlePA">{photoAlbumJson.photoAlbum.titlePA}</h1>
        <h2 className="subtitlePA">{photoAlbumJson.photoAlbum.subtitlePA}</h2>
        <PaCarousel />
      </div>
    </div>
  );
};

export default PhotoAlbum;
