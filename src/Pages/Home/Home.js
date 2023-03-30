import "./Home.css";
import Welcome from "../../Components/Welcome/Welcome";
import WhatWeDo from "../../Components/What-We-Do/WhatWeDo";
import Timeline from "../../Components/Timeline/Timeline";
import Featured from "../../Components/featured-project/Featured";
import PhotoAlbum from "../../Components/photoAlbum/photoAlbum";

const Home = () => {
  return (
    <div className="homeContainer">
      <Welcome />
      <WhatWeDo />
      <Featured />
      <Timeline />
      <PhotoAlbum />
    </div>
  );
};

export default Home;
