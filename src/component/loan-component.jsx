import React from "react";
import Button from "./button";

const LoanComponent = ({ icon, tittle, content, color }) => {
  return (
    <article className="loan--component">
      <div className="component--center">
        <div className="icon">
          <div
            className={`circle 
          ${color}`}
          ></div>
          <i>{icon}</i>
        </div>
        <div className="loan-content">
          <h3>{tittle}</h3>
          <p>{content}</p>
        </div>
      </div>
      <Button style="apply" content="Apply Here" />
    </article>
  );
};

export default LoanComponent;
