import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="w-full flex items-center justify-between mb-10">
      <div className="flex items-center gap-x-14 flex-1">
        <Link to="/" className="inline-block">
          <img
            srcSet="./logo01.png 2x"
            alt="crowding-logo"
            className="w-[55px] h-[50px]"
          />
        </Link>
        <DashboardSearch></DashboardSearch>
      </div>
      <div className="flex items-center w-full h-[52px] max-w-[450px] justify-between ">
        <DashboardFund></DashboardFund>
        <div>
          <Button
            href="/start-campaign"
            kind="secondary"
            type="button"
            className="text-white"
          >
            Start a campaign
          </Button>
        </div>
        <div>
          <img
            srcSet="./logo01.png 2x"
            alt="user-logo"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
