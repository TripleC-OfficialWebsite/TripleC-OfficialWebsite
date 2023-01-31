import "./Home.css";
import logo from "../../Images/logo.png";
import Welcome from "../../Components/Welcome/Welcome";
import Featured from "../../Components/featured-project/Featured";
import Photo_Album from "../../Components/photoAlbum/photoAlbum"

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Welcome />
      <Featured />
      <Photo_Album/>
      Home
    </div>
  );
};

export default Home;
