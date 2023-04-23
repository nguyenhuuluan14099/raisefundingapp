import { Button, ButtonGoogle } from "components/button";
import { Checkbox } from "components/checkbox";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ToggleIcon from "components/icons/ToggleIcon";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/auth-slice";

const schema = yup.object({
  name: yup.string().required("Please enter your fullname"),
  email: yup.string().email().required("Please enter your email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password should be 8 chars minimum."),
});

const SignUpPage = () => {
  const {
    control,
    // register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: "",
  });

  const dispatch = useDispatch();
  const handleSignUp = async (values) => {
    // try {
    //   dispatch(authRegister({ ...values }));
    //   reset({});
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      dispatch(authRegister({ ...values, permissions: [] }));
      reset({});
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };
  const [confirmTerm, setConfirmTerm] = useState(false);
  const handleConfirmTerm = () => {
    setConfirmTerm(!confirmTerm);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LayoutAuthentication heading="SignUp">
      <div className="flex items-center lg:mt-3 lg:mb-8 mt-1 mb-6">
        <p className="text-text3">Already have an account? </p>
        <Link className="text-primary underline" to="/sign-in">
          Sign in
        </Link>
      </div>
      <ButtonGoogle></ButtonGoogle>
      <p className="text-text2  text-xs p-3 cursor-pointer">
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUp)} className="w-full">
        <Field>
          <Label htmlFor="fullname">FullName *</Label>
          <Input
            error={errors.fullname?.message}
            type="text"
            control={control}
            name="name"
            placeholder="enter your fullname"
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email *</Label>
          <Input
            error={errors.email?.message}
            type="email"
            control={control}
            name="email"
            placeholder="enter your email"
          ></Input>
        </Field>

        <Field>
          <Label htmlFor="password">Password *</Label>
          <Input
            error={errors.password?.message}
            type={`${showPassword ? "text" : "password"}`}
            control={control}
            name="password"
            placeholder="enter your password"
          >
            <ToggleIcon
              open={showPassword}
              onClick={handleShowPassword}
            ></ToggleIcon>
          </Input>
        </Field>

        <div className="flex items-center gap-x-5 mb-3">
          <Checkbox checked={confirmTerm} onClick={handleConfirmTerm}>
            <p className="flex-1 text-text2">
              I agree to the{" "}
              <span className="text-secondary underline">Terms of Use</span> and
              have read and understand the{" "}
              <span className="text-secondary underline">Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="text-white bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
