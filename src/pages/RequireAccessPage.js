import { divide } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const RequireAccessPage = ({ allowPermission }) => {
  const { user } = useSelector((state) => state.auth);
  const userPermission = user?.permissions || [];
  const location = useLocation();
  //   const userPermission =
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!user || !user.email) {
  //       navigate("/sign-in");
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [user]);
  //   if (!user || !user.email) return null;
  // return (
  //   <>
  //     <Outlet></Outlet>
  //   </>
  // );

  return userPermission.find((p) => allowPermission?.includes(p)) ? (
    <>
      <Outlet></Outlet>
    </>
  ) : user ? (
    <Navigate to="/unauthorize" state={{ from: location }} replace></Navigate>
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
  );
};

export default RequireAccessPage;
