import React from "react";

const CampDesc = ({
  className = "text-xs",
  children = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto et, maiores ad, modi qui quia vel vitae incidunt facere autem quos non iure blanditiis nulla labore culpa quod provident dolore.",
}) => {
  return (
    <span className={`description-item text-text3  ${className}`}>
      {children}
    </span>
  );
};

export default CampDesc;
