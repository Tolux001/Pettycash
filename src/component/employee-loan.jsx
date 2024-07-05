import React from "react";
import Statistics from "./statistics";
import Button from "./button";

const EmployeeLoan = () => {
  return (
    <section className="employee-section">
      <div className="section-div">
        <div className="ES-image">
          <img src="images/1a.png" alt="employee--loan" />
        </div>
        <div className="EM--contents">
          <div className="EM--content">
            <h2>Let your employees access quick loan</h2>
            <p style={{ lineHeight: "200%", fontSize: "18px" }}>
              Register with us today and your employees can have access to low
              interest quick loan in less than 2 minutes. Employees get broke
              before payday. When you register with us, they get access to quick
              funds when they go broke before payday.
            </p>
          </div>
          {/* <div className="statistix">
          <Statistics icon="" color="" result="91%" />
          <Statistics icon="" color="" result="89%" />
          <Statistics icon="" color="" result="96%" />
        </div> */}
          <a
            href="#"
            className="anchor--underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Here
          </a>
        </div>
      </div>
      <div className="sub-set">
        <div>
          <h3 style={{ whiteSpace: "wrap" }}>
            You have got any questions for us?
          </h3>
          <Button style="contact-btn" content="Contact Us!" />
        </div>
      </div>
    </section>
  );
};

export default EmployeeLoan;
