import React from "react";

const Checkbox = ({ onClick = () => {}, checked = false, children }) => {
  return (
    <div className="flex items-center gap-x-5">
      <div
        onClick={onClick}
        className={`inline-flex items-center p-3 cursor-pointer justify-center w-5 h-5 rounded-lg border border-text4 ${
          checked ? "bg-primary" : ""
        }`}
      >
        <span className="text-white dark:text-text1">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <input type="checkbox" className="hidden" />
      </div>
      <label onClick={onClick}>{children}</label>
    </div>
  );
};

export default Checkbox;
