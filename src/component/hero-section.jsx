import React from "react";
import Button from "./button";
import NavBar from "./nav-bar";
import "../index.css";

const HeroSection = () => {
  return (
    <>
      <section className="header">
        <div className="blue-container"></div>
        <header>
          <NavBar />
        </header>
        <div className="hero-section">
          <div className="right-section">
            <img src="images/girl-image.png" alt="hero-section--Image" />
          </div>
          <div className="left-section">
            <h1>
              Get Instant loan up to{" "}
              <span className="orange-color">
                <del style={{ textDecorationStyle: "double" }}>N</del>100,000
              </span>{" "}
              in 5 minutes
            </h1>
            <Button style="explore" content="Explore Loan Products" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
