import React from "react";

const CampMeta = ({ size = "small" }) => {
  return (
    <div className="flex  flex-col gap-y-1">
      <span
        className={`text-text2  font-semibold ${
          size === "small" ? "text-sm" : "text-xl"
        }`}
      >
        $2,000
      </span>
      <span
        className={`text-text4 ${size === "small" ? "text-xs" : "text-lg"}`}
      >
        Raised of $1,900
      </span>
    </div>
  );
};

export default CampMeta;
