import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logos/Group 1329.png";
import "./_navBar.scss";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="/src">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Donation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/userEvents" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/event">
                <button className="btn btn-primary ml-3 ml-md-5 mb-3">Register</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin">
                <button className="btn btn-dark ml-3">Admin</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
