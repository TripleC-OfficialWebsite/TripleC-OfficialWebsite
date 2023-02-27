import React, { useState } from "react";
import newsletterJson from "../../Content/newsletter.json";
import "./Newsletter.css";

const NewsletterPage = () => {
  return (
    <div id="newsletterPage">
      <Newsletter/>
      <Superlink/>
    </div>
  );
};
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
const Superlink = () => {
  return(
    <div id="superlink">
        <h1 className="supertitle">{newsletterJson.newsletters[0].title}</h1>
        <h2 className="superdate">{newsletterJson.newsletters[0].date}</h2>
    </div>
  );
};
export default NewsletterPage;
