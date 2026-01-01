function DropdownSortBy() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Last opened by me");
  const ref = useRef(null);
  const options = [
    "Last opened by me",
    "Last modified by me",
    "Last modified",
    "Title",
  ];

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative container" ref={ref}>
      <button
        className="hover:bg-gray-100 rounded-full px-2 py-2 flex items-center"
        onClick={() => setOpen((v) => !v)}
        aria-label="Sort by"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2 17L5.75 7H7.9l3.75 10H9.6l-.85-2.4H4.9L4.1 17zm3.5-4.1h2.6L6.9 9.15h-.15zm8.2 4.1v-1.9l5.05-6.3H13.9V7h7.05v1.9l-5 6.3H21V17zM9 5l3-3l3 3zm3 17l-3-3h6z"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute flex justify-start -left-25  w-64 bg-white rounded-lg shadow-lg border border-gray-100  z-50 animate-fade-in">
          <div className="  relative z-50" >
            {options.map((opt) => (
              <div
                key={opt}
                className={`px-4 py-2 z-40 left-6 relative cursor-pointer text-gray-900 text-[14px] font-normal flex items-center ${selected === opt ? "" : ""}`}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
              >
                {selected === opt && (
                  <svg className=" absolute -left-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                {opt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";


function DropdownOwnedBy() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Owned by anyone");
  const ref = useRef(null);
  const options = [
    "Owned by anyone",
    "Owned by me",
    "Not owned by me",
  ];

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        className={`flex items-center px-3 py-1 rounded hover:bg-gray-100 text-[14px] font-normal  focus:outline-none `}
        onClick={() => setOpen((v) => !v)}
      >
        {selected}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg border border-gray-100 z-50 animate-fade-in">
          {options.map((opt) => (
            <div
              key={opt}
              className={`px-4 py-2 cursor-pointer  text-gray-900 text-[15px] flex items-center ${selected === opt ? "" : ""}`}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RecentSpreadsheets() {
  return (
    <section className=" relative  ">
      <div className=" px-4 py-6 "    style={{ fontFamily: '"Google Sans", Roboto, Arial, sans-serif' }}>
        <div className=" bg-white w-full h-full pt-4 mx-auto max-w-6xl">
          <div className="flex py-5 px-4 max-w-6xl justify-between items-center gap-2">
            <div className="text-[16px] mr-auto px-10 font-medium text-gray-800">
              <div className="items-center">
                <p>Recent spreadsheets</p>
              </div>
            </div>
            <div className="flex items-center  justify-between  gap-15">
              <DropdownOwnedBy />
              <div className="flex items-start mx-auto justify-center gap-4 text-gray-600 text-[14px] font-medium ">
                <p>Last opened by me</p>
              </div>
              <div className="flex items-center ml-10 gap-4 text-gray-800 text-[14px] font-medium ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <rect width="12.5" height="10.5" x="1.75" y="2.75" />
                      <path d="m2 8h12m-3.75-4.75v9.5m-4.5-9.5v9.5" />
                    </g>
                  </svg>
                </div>
                <DropdownSortBy />
                <div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
                    />
                  </svg>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-100 shadow rounded-md min-h-35 max-w-6xl mx-auto flex flex-col items-center justify-center bg-white">
          <div className="text-lg text-gray-700 font-medium mb-2 mt-2">
            No spreadsheets yet
          </div>
          <div className="text-gray-500 text-base mb-4">
            Select a blank spreadsheet or choose another template above to get
            started
          </div>
        </div>
      </div>
    </section>
  );
}
