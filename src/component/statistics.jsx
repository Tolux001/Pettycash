import React from "react";

const Statistics = (props) => {
  return (
    <div className={`stats ${props.color}`}>
      <div className="stats-body">
        <p>{props.icon}</p>
        <p className="result">{props.result}</p>
      </div>
    </div>
  );
};

export default Statistics;
