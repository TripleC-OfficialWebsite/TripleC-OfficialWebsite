import React, { useState } from "react";
import newsletterJson from "../../Content/newsletter.json";
import "./Newsletter.css";
const link022723 = newsletterJson.newsletters[0].link;
const size = newsletterJson.newsletters.length;
const map = new Map();

const NewsletterPage = () => {
  return (
    <div id="newsletterPage">
      <Newsletter/>
      <Block/>
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

const

const Block = () => {
  for (let i = 0; i < size; i++) {
    <div id="block">
        <a href={newsletterJson.newsletters[i].link} className="blocktitle">{newsletterJson.newsletters[i].title}</a>
        <h2 className="blockdate">{newsletterJson.newsletters[i].date}</h2>
    </div>
  };
};

export default NewsletterPage;
