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
          <a href="#" className="Hero-btn">
            Register Now
          </a>
        </div>

        <div className="Hero-side">
          <img src="/Illustration.png"></img>
        </div>
      </div>

      <div className="container Sponsor-container">
        <div className="Sponsor">
          <h3 className="Sponsor-text">In association with</h3>
          <img src="/logos/gfg.svg" className="Sponsor-logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
