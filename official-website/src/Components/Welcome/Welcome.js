import Logo from "./Logo";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div>
      <div className="home-cover"></div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Welcome;
