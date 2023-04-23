import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import RequireAccessPage from "pages/RequireAccessPage";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutDashboard = () => {
  // const { user } = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate("/sign-in");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  // if (!user || !user.email) return null;
  return (
    <div className="bg-lite w-full p-10">
      <DashboardTopbar></DashboardTopbar>
      <div className="flex gap-x-10  flex-start">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
