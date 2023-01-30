import "./Home.css";
import Welcome from "../../Components/Welcome/Welcome";
import Featured from "../../Components/featured-project/Featured";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Welcome />
      <Featured />
    </div>
  );
};

export default Home;
