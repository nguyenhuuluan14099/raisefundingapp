import { imageDefault } from "common/global";
import React from "react";

const CampImage = ({ className = "h-[158px]" }) => {
  return (
    <div className={className}>
      <img
        src={imageDefault}
        alt=""
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
