import {
  IconCampaign,
  IconDashboard,
  IconLightDark,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authLogOut } from "store/auth/auth-slice";
// import { authLogout } from "store/auth/auth-slice";

const DashboardSidebar = () => {
  const sideBarList = [
    {
      icon: <IconDashboard></IconDashboard>,
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: <IconCampaign></IconCampaign>,
      title: "Campaign",
      url: "/campaign",
    },
    {
      icon: <IconPayment></IconPayment>,
      title: "Payment",
      url: "/payment",
    },
    {
      icon: <IconWithdraw></IconWithdraw>,
      title: "Withdraw",
      url: "/withdraw",
    },
    {
      icon: <IconProfile></IconProfile>,
      title: "Profile",
      url: "/profile",
    },
    {
      icon: <IconLogout></IconLogout>,
      title: "Logout",
      url: "/logout",
    },
    {
      icon: <IconLightDark></IconLightDark>,
      title: "Light/Dark",
      url: "/dashboard",
      onClick: () => {},
    },
  ];
  const navLinkClass =
    " icon-sideBar last:bg-white flex items-center justify-center gap-x-2 w-[48px] h-[48px] mb-6  rounded-lg ";
  const dispatch = useDispatch();
  return (
    <div className=" w-full md:w-[76px] py-10 px-4 shadow-sdPrimary min-h-screen text-text4 rounded-lg flex-shrink-0 max-h-[700px]">
      {sideBarList.map((item) => {
        if (item.url === "/logout") {
          return (
            <button
              onClick={() => dispatch(authLogOut())}
              className={navLinkClass}
              key={item.title}
            >
              <span>{item.icon}</span>
              <span className="md:hidden">{item.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={item.url}
            key={item.title}
            className={({ isActive }) =>
              isActive
                ? `text-primary bg-primary bg-opacity-20 ${navLinkClass}`
                : `${navLinkClass} text-icon-color`
            }
          >
            <span className="">{item.icon}</span>
            <span className=" md:hidden">{item.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
