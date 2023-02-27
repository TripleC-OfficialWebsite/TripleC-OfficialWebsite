import React, { useState } from "react";
import newsletterJson from "../../Content/newsletter.json";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <div id="newsletter">
        <h1 className="title">{newsletterJson.title}</h1>
        <h2 className="subtitle">{newsletterJson.subtitle}</h2>
        <Superlink/>
      </div>
    </div>
  );
};
const Superlink = () => {
  return(
    <div>
        <h1 className="supertitle">{newsletterJson.newsletters[0].title}</h1>
        <h2 className="superlink">{newsletterJson.newsletters[0].date}</h2>
    </div>
  );
};
export default Newsletter;
