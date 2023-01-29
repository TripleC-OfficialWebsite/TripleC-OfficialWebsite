import "./photoAlbum.css"; 
import photoAlbumJson from "../../Content/home.json";
import { useState, useEffect } from "react";

function PhotoAlbum() {  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("../public/CutePic");
      const data = await res.json();
      console.log(data);
      setImages(data);
    }

    fetchImages();
  }, []);

  return (
    <div id="containerPA">
      {images.map((image) => (
        <img src={image.url} alt={image.name} key={image.id} />
      ))}
    </div>

  );
}

const photoAlbum = () => {
  return (
    <div>
      <div id="containerPA">
        <div className="titlePA">
          <h1 className="titlePA">{photoAlbumJson.photoAlbum.titlePA}</h1>
          <h2 className="subtitlePA">{photoAlbumJson.photoAlbum.subtitlePA}</h2>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;

