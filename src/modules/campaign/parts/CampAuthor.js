import { imageDefault } from "common/global";
import React from "react";

const CampAuthor = ({ image = imageDefault, name = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-2">
      <img
        src={image}
        alt=""
        className="w-[30px] h-[30px] object-cover rounded-full"
      />
      <p className="text-text3 font-normal text-xs">
        by <span className="text-text2 font-bold text-xs">{name}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
