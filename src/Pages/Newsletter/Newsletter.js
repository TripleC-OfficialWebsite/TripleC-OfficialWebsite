import React, { useState } from "react";
import newsletterJson from "../../Content/newsletter.json";
import "./Newsletter.css";
const link022723 = newsletterJson.newsletters[0].link;

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
    <div id="newsletter">
      <h1 className="title">{newsletterJson.title}</h1>
      <h2 className="subtitle">{newsletterJson.subtitle}</h2>
    </div>
  );
};
const Superlink = () => {
  return(
    <div id="superlink">
        <a href={link022723} className="supertitle">{newsletterJson.newsletters[0].title}</a>
        <h2 className="superdate">{newsletterJson.newsletters[0].date}</h2>
    </div>
  );
};
export default NewsletterPage;
