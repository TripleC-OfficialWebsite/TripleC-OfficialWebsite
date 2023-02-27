import React, { useState } from "react";
import newsletterJson from "../../Content/newsletter.json";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <div id="newsletter">
        <h1 className="title">{newsletterJson.title}</h1>
        <h2 className="subtitle">{newsletterJson.subtitle}</h2>
      </div>
    </div>
  );
};

export default Newsletter;
