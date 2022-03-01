import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            GitHub Search
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeRoute" : "inactiveRoute"
                }
              >
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "activeRoute" : "inactiveRoute"
                }
              >
                <a className="nav-link" aria-current="page">
                  About
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
