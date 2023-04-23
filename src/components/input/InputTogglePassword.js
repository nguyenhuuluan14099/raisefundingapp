import { IconEyeClose, IconEyes } from "components/icons";
import React, { Fragment, useState } from "react";
import { useController } from "react-hook-form";
import Input from "./Input";

const InputTogglePassword = ({
  placeholder = "",
  control,
  name = "password",
  error = "",
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;

  return (
    <div className="flex items-center w-full relative">
      <input
        placeholder={error.length <= 0 ? placeholder : ""}
        id="password"
        control={control}
        name="password"
        type={`${togglePassword ? "text" : "password"}`}
        className={` py-4 px-6 border border-strock text-sm text-text1 rounded-lg w-full placeholder:text-text4 ${
          error.length > 0
            ? "border-red-500"
            : !error
            ? "border-primary"
            : "border-strock"
        } `}
        {...field}
      >
        {/* {children} */}
      </input>
      {error && (
        <span className=" absolute top-2/4 left-6 -translate-y-2/4 text-red-500 error-input">
          {error}
        </span>
      )}
      <div className="absolute right-5 cursor-pointer z-10  ">
        {togglePassword ? (
          <IconEyes onClick={() => setTogglePassword(false)}></IconEyes>
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        )}
      </div>
    </div>
  );
};

export default InputTogglePassword;
