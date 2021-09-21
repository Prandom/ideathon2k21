import React from "react";
import "../styles/navbar.css";
// import ideathonlogo from "/logo.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container Navbar-container">
        <div className="Navbar-logo">
          <img src="/logos/logo.svg" alt="Ideathon" />
        </div>

        <div className="Navbar-secondary-logo">
          <div className="Navbar-secondary-logo-mntc">
            <a href="https://mntcnitdgp.co.in/">
              <img src="/logos/mntc-white.svg" alt="MNTC" />
            </a>
          </div>
          <div className="Navbar-secondary-logo-nit">
            <a href="https://nitdgp.ac.in/">
              <img src="/logos/nit-dgp-white.svg" alt="NIT Durgapur" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
