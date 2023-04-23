import React from "react";

const ButtonGoogle = ({ text = "Sign up with google" }) => {
  return (
    <button className="w-full flex items-center justify-center gap-x-2 border border-strock rounded-xl p-3">
      <img srcSet="./google-icon.png 2x" alt="" />
      <p className="text-text2 text-lg font-semibold dark:text-white">{text}</p>
    </button>
  );
};

export default ButtonGoogle;
