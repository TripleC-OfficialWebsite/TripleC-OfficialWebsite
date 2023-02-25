import "./Navbar.css";
import { Link } from "react-router-dom";

import ProJson from "./Content/projects.json";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav">
      <Link to={``} className="navbar-brand brand">
        <img src={"./Images/logo.png"} width="30" height="30" alt="" />
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
              <button className="btn btn-dark tab rect dropdown-toggle" type="button" data-toggle="dropdown">PROJECTS</button>
              <ul className="dropdown-menu">
                <li value={ProJson.Label.title}><Link to={`projects/Label`}>{ProJson.Label.title}</Link></li>
                <li value={ProJson.MapSocial.title}><Link to={`projects/MapSocial`}>{ProJson.MapSocial.title}</Link></li>
                <li value={ProJson.GoalTritons.title}><Link to={`projects/GoalTritons`}>{ProJson.GoalTritons.title}</Link></li>
              </ul>
            </div>
            {/* <Link to={`projects`} className="btn btn-dark tab rect">
              PROJECTS
            </Link> */}
          </li>
          <li className="nav-item dropdown">
            <Link to={`departments`} className="btn btn-dark tab rect">
              DEPARTMENTS
            </Link>
          </li>
          <li className="nav-item tab">
            <button
              type="button"
              className="btn btn-primary tab"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              CONTACT US
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
