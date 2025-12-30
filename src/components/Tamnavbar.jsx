import React from "react";

const Tamnavbar = ({ onBack }) => (
  <div className="w-full flex items-center h-16 px-6 border-b border-gray-200 bg-white sticky top-0 z-10">
    <button
      className="mr-4 p-2 rounded-full hover:bg-gray-100"
      onClick={onBack}
      aria-label="Back"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    <span className="text-lg font-normal text-gray-900">
      Template gallery
    </span>
  </div>
);

export default Tamnavbar;
