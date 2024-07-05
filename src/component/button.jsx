import React from "react";
import "../index.css";

const Button = (props) => {
  return (
    <>
      <button type="button" className={`btn ${props.style}`}>
        {props.content}
      </button>
    </>
  );
};

export default Button;
