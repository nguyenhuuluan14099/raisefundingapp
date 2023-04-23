import { Button } from "components/button";
import { Field } from "components/field";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignPerk from "modules/campaign/CampaignPerk";
import CampaignSupport from "modules/campaign/CampaignSupport";
import CampCategory from "modules/campaign/parts/CampCategory";
import CampDesc from "modules/campaign/parts/CampDesc";
import CampImage from "modules/campaign/parts/CampImage";
import CampMeta from "modules/campaign/parts/CampMeta";
import CampTitle from "modules/campaign/parts/CampTitle";
import React, { Fragment, useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

const CampaignView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div
        className="flex items-center bg-no-repeat bg-cover justify-center w-full rounded-xl h-[140px] mb-10"
        style={{
          background: `linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, rgba(0,0,0,0.2) 87.01%), url("/banner01.avif")`,
        }}
      >
        <span className="text-white text-4xl font-bold">Education</span>
      </div>
      <div className="w-full max-w-[1243px] h-full max-h-[400px] flex items-start  gap-x-10 mb-[200px]">
        <div className="flex-1 h-full">
          <CampImage className="h-full w-full max-w-[653px] mb-8"></CampImage>
          <div className="flex items-center gap-x-5 w-full justify-center">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  className="cursor-pointer w-[70px] h-[58px] rounded-lg object-cover"
                  key={index}
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              ))}
          </div>
        </div>

        <div className="flex-1 flex-col items-start justify-between w-full max-w-[530px] h-full max-h-[400px]">
          <div className="flex items-center justify-between">
            <CampCategory className="text-sm">Film</CampCategory>
            <div className="flex items-center gap-x-2 text-text3">
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="arrow-redo-outline"></ion-icon>
            </div>
          </div>
          <CampTitle className="text-xl mb-4"></CampTitle>
          <CampDesc className="text-sm mb-5"></CampDesc>

          <div className="flex items-start gap-x-5 my-5">
            <img
              srcSet="https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="flex items-start flex-col justify-around h-[60px]">
              <div className="flex items-center gap-x-3">
                <p className="text-text1 font-medium text-lg">Saiful Islam</p>
                {Array(4)
                  .fill(0)
                  .map((item, index) => (
                    <span key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
              </div>

              <div className="flex items-center gap-x-3">
                <p className="text-primary font-semibold text-sm">
                  02 Campaign
                </p>
                <span className="w-[6px] h-[6px] rounded-full bg-text3"></span>
                <p className="text-text3 text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-3">
            <div className="w-2/3 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-center mb-5 gap-x-5 justify-between">
            <CampMeta size="large"></CampMeta>
            <CampMeta size="large"></CampMeta>
            <CampMeta size="large"></CampMeta>
          </div>
          <Button type="button" className="text-white" kind="primary">
            Back this project
          </Button>
        </div>
      </div>

      <div className="h-full max-h-[90px] mb-5 flex items-center justify-between w-full">
        <div className="flex items-center gap-x-[60px] text-xs bg-white ">
          <Link to="/">
            <p className="text-xs text-secondary font-medium">Campaign</p>
          </Link>
          <Link to="/">
            <p>Risks</p>
          </Link>
          <Link to="/">
            <p>FAQ</p>
          </Link>
          <Link to="/">
            <p>Updates</p>
          </Link>
          <Link to="/">
            <p>Comments</p>
          </Link>
        </div>
        <Button className="p-3 w-full max-w-[208px] bg-primary text-white">
          Back this project
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-x-[124px]">
        <div className="w-full max-w-[605px]">
          <p className="text-text1 font-medium text-lg mb-[10px]">STORY</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet
          natus nulla. Dolores numquam tenetur obcaecati, vel in a doloribus
          odit sed, illo voluptatem placeat praesentium iusto? Quis, itaque
          ipsam.
        </div>
        <div className="w-full max-w-[441px] mb-[70px]">
          <p className="text-text1 font-medium text-lg">SUPPORT</p>
          <CampaignSupport></CampaignSupport>
          <CampaignPerk></CampaignPerk>
          <CampaignPerk></CampaignPerk>
          <CampaignPerk></CampaignPerk>
        </div>
      </div>
      <p className="text-text1 font-semibold text-xl mb-[40px]">
        You also may be interested in
      </p>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>

      {showModal && (
        <ReactModal
          isOpen
          overlayClassName="fixed bg-black bg-opacity-20 inset-0 z-50 flex items-center justify-center "
          className="overflow-y-auto  w-full max-w-[521px] max-h-[90vh] rounded-2xl bg-white outline-none border border-strock scroll-hidden  shadow-sdPrimary px-10 py-[44px]"
        >
          <div className="flex items-center justify-between">
            <div></div>
            <div className="float-right  p-2 cursor-pointer rounded-lg w-10px h-10px text-2xl font-bold">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[25px] mb-10 font-bold text-text1">
              Back this project
            </p>
          </div>
          <Field>
            <label className="text-sm font-medium text-text2">
              Enter the contribute amount
            </label>
            <input
              type="text"
              className="p-5 border border-strock rounded-lg text-sm font-medium"
              placeholder="$10"
            />
            <p className="mx-5 text-text3 text-sm">
              Contribution are not associatied with perks
            </p>
          </Field>
          <Button
            type="button"
            kind="primary"
            className="mb-[60px] w-full max-w-[162px] text-white"
          >
            Continue
          </Button>
          <CampaignPerk showButton={true}></CampaignPerk>
          <CampaignPerk showButton={true}></CampaignPerk>
          <CampaignPerk showButton={true}></CampaignPerk>
        </ReactModal>
      )}
    </Fragment>
  );
};

export default CampaignView;
