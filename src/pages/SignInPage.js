import { Button, ButtonGoogle } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ToggleIcon from "components/icons/ToggleIcon";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const SignInPage = () => {
  const schema = yup.object({
    email: yup.string().email().required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password should be 8 chars minimum."),
  });
  const {
    control,
    // register,
    handleSubmit,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <LayoutAuthentication heading="Sign In">
      <div className="flex items-center lg:mt-3 lg:mb-8 mt-1 mb-6">
        <p className="text-text3">Don't have an account? </p>
        <Link className="text-primary underline" to="/sign-up">
          Sign up
        </Link>
      </div>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)} className="w-full">
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
        <p className="text-right">
          <span className="text-primary">Forgot password</span>
        </p>
        <Button
          isLoading={isSubmitting}
          type="submit"
          className="text-white bg-primary"
        >
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
