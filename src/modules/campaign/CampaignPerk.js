import { Button } from "components/button";
import React from "react";
import CampImage from "./parts/CampImage";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <>
      <div className="mb-[20px] shadow-sdPrimary bg-white rounded-3xl w-full max-w-[441px]">
        <CampImage className="w-full h-[232px]"></CampImage>
        <div className="flex flex-col gap-y-3 p-5">
          <div className="w-[82px] h-[22px] bg-secondary flex items-center justify-center text-white p-4 rounded-3xl ">
            Featured
          </div>
          <p className="text-text1 text-xl font-semibold">Special One Camera</p>
          <div className="flex items-center gap-x-2">
            <p className="text-text1 text xl font-bold">$2,724 USD</p>
            <div className="flex items-center gap-x-2">
              <p className="underline text-sm font-medium text-error">
                $1,504 USD
              </p>
              <p className="text-sm font-medium text-error">(12% OFF)</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium text-text1">Estimated Shipping</p>
            <p className="text text2 text-sm">October 2022</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text text1 text-sm font-medium">
              <strong>05</strong> claimed
            </p>
            <p className="text-sm text-text2">Ships worldwide</p>
          </div>
        </div>
      </div>

      {showButton && (
        <div className="mx-auto w-full max-w-441px mb-[40px]">
          <Button type="button" kind="secondary" className="text-white w-full">
            Get this perk
          </Button>
        </div>
      )}
    </>
  );
};

export default CampaignPerk;
