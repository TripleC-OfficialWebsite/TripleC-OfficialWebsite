import "./Home.css";
import logo from "../../Images/logo.png";
import Welcome from "../../Components/Welcome/Welcome";
import Featured from "../../Components/featured-project/Featured";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Welcome />
      <Featured />
      Home
    </div>
  );
};

export default Home;
