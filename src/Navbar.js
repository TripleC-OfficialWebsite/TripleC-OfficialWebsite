import "./Navbar.css";
import { Link } from "react-router-dom";
import ContactUs from "./Pages/ContactUs/ModalWindow.js";

import ProJson from "./Content/projects.json";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav fixed-top">
      <Link to={``} className="navbar-brand brand">
        <img src={"./Images/logo.png"} width="30" height="30" alt="das" />
        Triple C
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={`newsletter`} className="btn btn-dark tab rect">
              NEWSLETTER
            </Link>
          </li>
          <li className="nav-item dropdown">
            <div className="ProDropDown">
              <button
                className="btn btn-dark tab rect dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                PROJECTS
              </button>
              <ul className="dropdown-menu">
                <li className="brand whiteColor"><u>Ongoing Projects</u></li>
                {Object.keys(ProJson).map((key,index) => {
                  return (ProJson[key].type === 'active' &&
                    (<li value={ProJson[key].title}>
                      <Link to={`projects/${key}`} className="projectLink">
                        {ProJson[key].title}
                      </Link>
                    </li>)
                  );
                })}
                <div class="dropdown-divider"></div>

                <li className="brand whiteColor"><u>Past Projects</u></li>
                {Object.keys(ProJson).map((key,index) => {
                  return (ProJson[key].type === 'past' &&
                    (<li value={ProJson[key].title}>
                      <Link to={`projects/${key}`} className="projectLink">
                        {ProJson[key].title}
                      </Link>
                    </li>)
                  );
                })}
                
              </ul>
            </div>

          </li>
          <li className="nav-item dropdown">
            <Link to={`departments`} className="btn btn-dark tab rect">
              DEPARTMENTS
            </Link>
          </li>
          <li className="nav-item tab">
            <ContactUs />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
