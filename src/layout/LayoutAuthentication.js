import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "common/ErrorComponent";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LayoutAuthentication = (props) => {
  const { children, heading } = props;

  // const { user } = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (user && user.email) {
  //     navigate("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  // if (user && user.email) return null;
  return (
    <div className="w-full min-h-screen bg-lite dark:bg-darkbg  p-10 relative isolate">
      <Link to="/">
        <img
          srcSet="./Logo.png 2x"
          alt="bg"
          className="inline-block lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] lg:mb-[64px] mb-[20px]"
        />
      </Link>

      <div className="w-full max-w-[556px] mx-auto dark:bg-darkSecondary bg-white rounded-xl lg:py-[50px] lg:px-[60px] py-[30px] px-[20px] flex flex-col items-center">
        <h1 className="text-lg text-center font-bold dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
      <img
        src="./Elements.png"
        alt=""
        className="absolute right-0 bottom-0 left-0 z-[-1]"
      />
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
