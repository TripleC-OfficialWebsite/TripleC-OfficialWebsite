import "./Navbar.css";
import { Link } from "react-router-dom";
import ContactUs from "./Pages/ContactUs/ModalWindow.js";

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
            <Link to={`projects`} className="btn btn-dark tab rect">
              PROJECTS
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to={`departments`} className="btn btn-dark tab rect">
              DEPARTMENTS
            </Link>
          </li>
          <li className="nav-item tab">
            <ContactUs/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
