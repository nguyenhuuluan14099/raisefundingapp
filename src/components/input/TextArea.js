import React from "react";
import { useController } from "react-hook-form";
import classNames from "util/classNames";

const TextArea = ({
  name,
  control,
  className = "",
  children,
  placeholder = "",
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      placeholder={placeholder}
      {...field}
      className={classNames(
        "w-full border border-primary py-4 px-6 outline-none resize-none rounded-2xl",
        className
      )}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
