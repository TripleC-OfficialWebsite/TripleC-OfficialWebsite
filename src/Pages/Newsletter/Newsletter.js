import React, { useState } from "react";
import newsletterJson from "../../Content/newsletter.json";
import "./Newsletter.css";

const itemsPerPage = 6;
const newsletters = newsletterJson.newsletters;

const NewsletterPage = () => {
  const totalPages = Math.ceil(newsletters.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentNewsletters, setCurrentNewsletters] = useState(
    newsletters.slice(
      (currentPage - 1) * itemsPerPage,
      Math.min(currentPage * itemsPerPage, newsletters.length)
    )
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentNewsletters(
      newsletters.slice(
        (pageNumber - 1) * itemsPerPage,
        Math.min(pageNumber * itemsPerPage, newsletters.length)
      )
    );
  };

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
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="blocktitle"
      >
        {item.title}
      </a>
      <h2 className="blockdate">{item.date}</h2>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          key={"back"}
          className="btn btn-outline-light pag"
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<"}
        </button>
      )}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className="btn btn-outline-light pag"
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          key={"next"}
          className="btn btn-outline-light pag"
          onClick={() => onPageChange(currentPage + 1)}
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default NewsletterPage;
