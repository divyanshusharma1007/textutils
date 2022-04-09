import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(probs) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${probs.mode} bg-${probs.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={probs.togglemode}
              />
              <label
                className={`form-check-label text-${probs.button}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {probs.buttontext}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
