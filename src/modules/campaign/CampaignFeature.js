import Gap from "common/Gap";
import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div>
      <div className="w-full max-w-[1243px] h-[266px] flex items-center  gap-x-7">
        <CampImage className="h-full w-full max-w-[583px]"></CampImage>
        <div className="flex-1 w-full max-w-[530px]">
          <CampCategory className="text-sm">Architecture</CampCategory>
          <CampTitle className="text-xl mb-4"></CampTitle>
          <CampDesc className="text-sm mb-5"></CampDesc>
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-3">
            <div className="w-2/3 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-center gap-x-5 justify-between">
            <CampMeta size="large"></CampMeta>
            <CampMeta size="large"></CampMeta>
            <CampMeta size="large"></CampMeta>
          </div>
        </div>
      </div>
      <Gap></Gap>
    </div>
  );
};

export default CampaignFeature;
