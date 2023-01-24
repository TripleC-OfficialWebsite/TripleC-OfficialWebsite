import "./Home.css";
import logo from "../../Images/logo.png";
import Welcome from "../../Components/Welcome/Welcome";
import WhatWeDo from "../../Components/Welcome/WhatWeDo";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Welcome />
      <WhatWeDo />
      Home
    </div>
  );
};

export default Home;
