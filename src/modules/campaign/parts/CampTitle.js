import React from "react";

const CampTitle = ({
  className = "text-lg mb-1",
  children = "Powered Kits Learning Boxes",
}) => {
  return (
    <span className={`title-item font-medium text-text1  ${className}`}>
      {children}
    </span>
  );
};

export default CampTitle;
