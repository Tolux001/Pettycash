import React from "react";
import LoanComponent from "./loan-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faBullhorn,
  faBezierCurve,
} from "@fortawesome/free-solid-svg-icons";

const LoanSection = () => {
  const textStyle = {
    textAlign: "center",
    lineHeight: "200%",
  };
  return (
    <section className="loan--section">
      <h1 style={textStyle}>Other Loan Products</h1>
      <div className="background-color"></div>
      <div className="loan--flex">
        <LoanComponent
          icon={<FontAwesomeIcon icon={faCamera} size="3x" />}
          tittle="Federal Staff Loan"
          content="Loan to any Federal government staff in Nigeria Loan from #5,000 to #50,000 within minutes."
          color="lightblue"
        />
        <LoanComponent
          icon={<FontAwesomeIcon icon={faBullhorn} size="3x" />}
          tittle="Payday Loan"
          content="A Quick loan to salary earners anywhere in Nigeria. Loans from #5,000 to #50,000 within minutes."
          color="orange"
        />
        <LoanComponent
          icon={<FontAwesomeIcon icon={faBezierCurve} size="3x" />}
          tittle="Car Colleteral Loan"
          content="Use your car as collateral and get a loan up to N5million within 24 hours."
          color="dodgerblue"
        />
      </div>
    </section>
  );
};

export default LoanSection;
