import "./photoAlbum.css";
import photoAlbumJson from "../../Content/home.json";

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

export default photoAlbum;
