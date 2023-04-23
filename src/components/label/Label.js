import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { className = "", htmlFor = "", children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} inline-block text-text2 font-semibold cursor-pointer`}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
