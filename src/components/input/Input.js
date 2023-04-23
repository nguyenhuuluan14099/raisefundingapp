import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "common/ErrorComponent";
const Input = (props) => {
  const {
    children,
    control,
    name,
    placeholder = "",
    type = "text",
    error = "",
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        placeholder={error.length <= 0 ? placeholder : ""}
        id={name}
        type={type}
        className={`dark:bg-darkStroke py-4 px-6 border  text-sm dark:text-white text-text1 rounded-lg w-full placeholder:text-text4  ${
          error.length > 0
            ? "border-red-500"
            : !error
            ? "border-primary"
            : "border-strock"
        }`}
        {...field}
        {...rest}
      ></input>
      {error && (
        <span className="bg-white absolute top-2/4 left-6 -translate-y-2/4 text-red-500 error-input">
          {error}
        </span>
      )}
      {children && (
        <div className="cursor-pointer  absolute top-2/4 right-5 -translate-y-2/4 z-10 pl-2 bg-transparent dark:bg-darkStroke select-none">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(Input, { FallbackComponent: ErrorComponent });
