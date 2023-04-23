import { imageDefault } from "common/global";
import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative w-full z-50">
      <div className="rounded-full bg-white p-2 w-full max-w-[458px] flex items-center h-[52px] shadow-sdPrimary">
        <input
          placeholder="Do fundrise now"
          type="text"
          className="w-full h-full pl-6 flex-1 text-sm font-medium placeholder:text-text4"
        />
        <button className="ml-2 flex-shrink-0 flex p-2 bg-primary justify-center items-center rounded-full text-white w-full max-w-[72px] ">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results absolute left-0 top-full rounded-3xl bg-white z-50 translate-y-5 px-2 py-2 w-full max-w-[843px]">
          <div className="flex items-center justify-between mb-5">
            <p className="text-text1 pl-4 text-sm font-medium underline">
              See all 10,124 fundraisier
            </p>
            <div className="cursor-pointer flex items-center justify-center text-error bg-error bg-opacity-20 w-[72px] h-[50px] rounded-lg">
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

          <div className="search-result-item flex flex-col gap-y-5 px-4 mb-6">
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
          </div>

          <div className="mb-6 px-4">
            <p className="text-text1 text-sm font-semibold mb-4">
              Related searchs
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="text-text2 text-sm">education fund</p>
              <p className="text-text2 text-sm">education fund</p>
              <p className="text-text2 text-sm">education and schools fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={imageDefault}
        className="w-[50px] h-[50px] object-cover rounded-lg"
        alt=""
      />
      <div className="flex  flex-col gap-y-1">
        <p className="text-text1 font-semibold text-sm">
          <strong>Education</strong> fund for Durgham Family
        </p>
        <p className="text-text3 font-normal">By Durgham Family</p>
      </div>
    </div>
  );
}
export default DashboardSearch;
