import { IconFolder } from "components/icons";
import React from "react";

const CampCategory = ({ children = "Education", className = "text-xs" }) => {
  return (
    <div className="flex items-center gap-x-2 align-middle mb-4">
      <IconFolder></IconFolder>
      <span
        className={`relative top-[2px] font-medium text-text3 ${className}`}
      >
        {children}
      </span>
    </div>
  );
};

export default CampCategory;
