import React, { useState } from "react";
import newsletterJson from "../../Content/newsletter.json";
import "./Newsletter.css";

const itemsPerPage = 5;

const NewsletterPage = () => {
  const totalPages = Math.ceil(
    newsletterJson.newsletters.length / itemsPerPage
  );

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentNewsletters = newsletterJson.newsletters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id="newsletterPage">
      <Newsletter />
      <div id="blocks">
        {currentNewsletters.map((item, index) => (
          <Block key={index} item={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
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

const Block = ({ item }) => {
  return (
    <div className="block">
      <a href={item.link} className="blocktitle">
        {item.title}
      </a>
      <h2 className="blockdate">{item.date}</h2>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={index + 1 === currentPage ? "active" : ""}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default NewsletterPage;
