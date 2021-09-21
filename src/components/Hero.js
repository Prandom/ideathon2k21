import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="container Hero-container">
        <div className="Hero-main">
          <h1 className="Hero-main-text">
            <span className="Hero-main-color"> Innovate.</span>
            <br /> Aspire.
            <br /> Be crowned the
            <br /> winner of
            <br /> Ideathon
          </h1>
          <a
            href="https://dare2compete.com/p/ideathon-national-institute-of-technology-nit-durgapur-210515?fbclid=IwAR35hd-HFw4kavxZI-JTHiUq4hOKuLjV2fBA1ZoWMCZe5ehoZe6Bp143QSg&lb=bSAfiq1"
            className="Hero-btn"
          >
            Register Now
          </a>
        </div>

        <div className="Hero-side">
          <img src="/Illustration.png" alt="Illustration" />
        </div>
      </div>

      <div className="container Sponsor-container">
        <div className="Sponsor">
          <h3 className="Sponsor-text">In association with</h3>
          <a href="https://www.geeksforgeeks.org/">
            <img
              src="/logos/gfg.svg"
              className="Sponsor-logo"
              alt="GeekforGeeks"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
