import "./Home.css";
import logo from "../../Images/logo.png";
import Welcome from "../../Components/Welcome/Welcome";
import Photo_Album from "../../Components/Photo_Album/Photo_Album"

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Welcome />
      <Photo_Album/>
      Home
    </div>
  );
};

export default Home;
