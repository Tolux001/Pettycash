import React from "react";
import Button from "./button";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src="images/about.jpeg" alt="about pettycash" />
        <div className="bg--image"></div>
      </div>
      <div className="about-content">
        <h1>About Pettycash</h1>
        <p>
          We are Pettycash, a lending firm with customers in 36 states in
          Nigeria. We don’t have branches, but we do have enough employees
          dedicated to helping our customers borrow funds. We offer a fully
          digital experience by providing instant loan to salary earners in
          Nigerian though their employer or individually. This means our
          customers can access finance anytime and anywhere.
        </p>
        <div className="repay">
          <span>
            <FontAwesomeIcon
              icon={faRocket}
              size="2xl"
              color="hsl(205, 72%, 37%)"
            />
          </span>
          <div>
            <h3>Repayment</h3>
            <p>Repayment dependent on loan type</p>
          </div>
        </div>
        <Button style="explore" content="Explore More Loan Products" />
      </div>
    </section>
  );
};

export default About;
