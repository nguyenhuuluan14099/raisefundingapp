import Heading from "common/Heading";
import { Button } from "components/button";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React, { Fragment } from "react";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between p-10 bg-white rounded-3xl">
        <div className="flex items-center gap-x-8">
          <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-secondary p-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </div>
          <div className="flex gap-y-1 flex-col">
            <h4 className="text-text1 text-xl font-semibold">
              Create Your Campaign
            </h4>
            <p className="text-text3 text-xs">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <p className="text-primary text-xs">Need any help? Learn More...</p>
          </div>
        </div>
        <div>
          <Button
            kind="ghost"
            className="text-secondary"
            href="/start-campaign"
            type="button"
          >
            Create campaign
          </Button>
        </div>
      </div>
      <Heading number={4}>Your Campaign</Heading>

      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignPage;
