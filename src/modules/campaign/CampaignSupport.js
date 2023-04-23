import { Button } from "components/button";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm({});
  return (
    <div className="mb-[60px] bg-white p-[25px] flex flex-col gap-y-5">
      <div className="text-center mb-[10px]">
        <p className="text-text3 font-semibold text-xl">
          Pledge without reward
        </p>
      </div>
      <input
        type="text"
        placeholder="$10"
        control={control}
        className="border border-strock rounded-lg py-2 px-5 text-lg text-4 font-medium "
      />
      <div className="bg-[#F7F7F7] rounded-lg max-h-126px p-5 flex flex-col gap-y-5">
        <p className="text-sm text-text2 font-semibold">
          Back it because you believe in it.
        </p>
        <p className="text-text3 text-sm">
          Support the project for no reward, just because it speaks to you.
        </p>
      </div>
      <Button type="button" className="text-white" kind="secondary">
        Continue
      </Button>
    </div>
  );
};

export default CampaignSupport;
