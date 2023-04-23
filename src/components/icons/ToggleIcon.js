import React from "react";
import IconEyeClose from "./IconEyeClose";
import IconEyes from "./IconEyes";

const ToggleIcon = ({ className, onClick = () => {}, open = false }) => {
  if (open) return <IconEyes onClick={onClick}></IconEyes>;
  return (
    <div>
      <IconEyeClose onClick={onClick}></IconEyeClose>
    </div>
  );
};

export default ToggleIcon;
