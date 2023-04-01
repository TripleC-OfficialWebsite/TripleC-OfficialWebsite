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
                <li value={ProJson.Label.title}>
                  <Link to={`projects/Label`} className="projectLink">
                    {ProJson.Label.title}
                  </Link>
                </li>
                <li value={ProJson.MapSocial.title}>
                  <Link to={`projects/MapSocial`} className="projectLink">
                    {ProJson.MapSocial.title}
                  </Link>
                </li>
                <li value={ProJson.GoalTritons.title}>
                  <Link to={`projects/GoalTritons`} className="projectLink">
                    {ProJson.GoalTritons.title}
                  </Link>
                </li>
                <li value={ProJson.WeRide.title}>
                  <Link to={`projects/WeRide`} className="projectLink">
                    {ProJson.WeRide.title}
                  </Link>
                </li>
                <li value={ProJson.Defit.title}>
                  <Link to={`projects/Defit`} className="projectLink">
                    {ProJson.Defit.title}
                  </Link>
                </li>
                <li value={ProJson.HousingDashboard.title}>
                  <Link
                    to={`projects/HousingDashboard`}
                    className="projectLink"
                  >
                    {ProJson.HousingDashboard.title}
                  </Link>
                </li>
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
            <ContactUs />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
