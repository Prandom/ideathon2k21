import React from "react";
import "../styles/navbar.css";
// import ideathonlogo from "/logo.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container Navbar-container">
        <div className="Navbar-logo">
          <img src="/logos/logo.svg" />
        </div>

        <div className="Navbar-secondary-logo">
          <div className="Navbar-secondary-logo-mntc">
            <img src="/logos/mntc-white.svg" />
          </div>
          {/* <div className="Navbar-secondary-logo-separator" /> */}
          <div className="Navbar-secondary-logo-nit">
            <img src="/logos/nit-dgp-white.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
