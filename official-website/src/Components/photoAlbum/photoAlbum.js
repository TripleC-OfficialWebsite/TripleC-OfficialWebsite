import "./photoAlbum.css";
import photoAlbumJson from "../../Content/home.json";

const photoAlbum = () => {
  return (
    <div>
      <div className="home-cover"></div>
      <div id="container">
        <div className="title">
          <h1 className="title">{photoAlbumJson.photoAlbum.title}</h1>
          <h2 className="subtitle">{photoAlbumJson.photoAlbum.subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default photoAlbum;
