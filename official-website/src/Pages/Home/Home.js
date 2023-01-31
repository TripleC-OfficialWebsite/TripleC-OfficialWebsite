import "./Home.css";
import logo from "../../Images/logo.png";
import Welcome from "../../Components/Welcome/Welcome";
import WhatWeDo from "../../Components/What-We-Do/WhatWeDo";
import Timeline from "../../Components/Timeline/Timeline";
import Featured from "../../Components/featured-project/Featured";
import PhotoAlbum from "../../Components/photoAlbum/photoAlbum";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Welcome />
      <WhatWeDo />
      <Featured />
      <Timeline />
      <PhotoAlbum />
    </div>
  );
};

export default Home;
