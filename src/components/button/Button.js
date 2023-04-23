import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div
      className={`h-6 w-6 rounded-full  border-2 border-t-transparent border-b-transparent animate-spin`}
    ></div>
  ) : (
    children
  );
  let defaultBtnClass =
    "w-full p-4 flex items-center justify-center rounded-lg font-semibold min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultBtnClass = defaultBtnClass + "text-white bg-primary";
      break;
    case "secondary":
      defaultBtnClass = defaultBtnClass + "text-white bg-secondary";
      break;
    case "ghost":
      defaultBtnClass =
        defaultBtnClass + "text-secondary bg-opacity-20 bg-secondary";
      break;
    default:
      break;
  }
  if (rest.kind) {
    return (
      <Link to={rest.href} className={`${className} ${defaultBtnClass} `}>
        {child}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={` ${defaultBtnClass}  ${className}${
        isLoading ? "w-full max-w-6 opacity-50 pointer-events-none" : ""
      }`}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Button;
