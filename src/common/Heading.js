import React from "react";

const Heading = ({ children, number = null, className = "" }) => {
  return (
    <div className="text-lg font-medium text-text1 mb-5">
      {children}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </div>
  );
};

export default Heading;
