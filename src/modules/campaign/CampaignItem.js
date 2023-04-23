import { IconFolder } from "components/icons";
import React from "react";
import CampAuthor from "./parts/CampAuthor";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
  return (
    <div className="shadow-sdPrimary bg-white rounded-2xl">
      <CampImage></CampImage>
      <div className="p-5">
        <CampCategory></CampCategory>
        <div className="flex items-start flex-col gap-y-1 mb-4">
          <CampTitle></CampTitle>
          <CampDesc></CampDesc>
        </div>
        <div className="flex items-center justify-between gap-x-5 mb-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
