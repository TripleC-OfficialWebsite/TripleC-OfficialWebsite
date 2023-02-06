import Logo from "./Logo";
import "./Welcome.css";
import welcomeJson from "../../Content/home.json";
import { useState, useEffect } from "react";

const Welcome = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const titleChars = welcomeJson.welcome.title.split("");
    titleChars.forEach((val, index) => {
      setTimeout(() => {
        if (index < titleChars.length - 1) {
          setTitle((title) => title.substring(0, index) + val + "|");
        } else {
          setTitle((title) => title.substring(0, index) + val);
        }
      }, index * 100);
    });
  }, []);

  return (
    <div>
      <div className="home-cover"></div>
      <div id="container">
        <Logo />
        <div className="welcomeTitles">
          <h1 className="welcomeTitle">{title}</h1>
          <h2 className="welcomeSubtitle">{welcomeJson.welcome.subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
