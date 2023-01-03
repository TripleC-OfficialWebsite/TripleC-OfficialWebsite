import "./Navbar.css";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to={``} className="navbar-brand brand">
        <img src={logo} width="30" height="30" alt="" />
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
          <li className="nav-item">
            <button type="button" className="btn btn-dark tab rect">
              PROJECTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-caret-down-fill margin-left"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-dark tab rect">
              DEPARTMENTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-caret-down-fill margin-left"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
          </li>
          <li className="nav-item tab">
            <button type="button" className="btn btn-primary tab">
              CONTACT US
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
