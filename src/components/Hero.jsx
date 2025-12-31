import React, { useState, useRef } from "react";
import gsap from "gsap";
import Allsheets from "./Allsheets";
import "../App.css";

// Main templates for landing page
const templates = [
  {
    img: "https://ssl.gstatic.com/docs/templates/thumbnails/sheets-blank-googlecolors.png",
    title: "Blank spreadsheet",
    style: "",
  },
  {
    img: "https://ssl.gstatic.com/docs/templates/thumbnails/1RMjNlAiz9clPyEQbF87uEqRk_BZLFUzE8rW4z91kyAE_400.png",
    title: "Google Finance Inves...",
    style: "Bright",
  },
  {
    img: "https://ssl.gstatic.com/docs/templates/thumbnails/1eKIzWlFfO9IXwCke-mdai1Nx2jj0yaNDfiQAhNCu1vk_400_4.png",
    title: "To-do list",
    style: "Bright",
  },
  {
    img: "https://ssl.gstatic.com/docs/templates/thumbnails/136ONFfL81Pzpysd3lUU8T1i-fQ_CvT0pMUmwNinkXf4_400_3.png",
    title: "Annual budget",
    style: "Swiss",
  },
  {
    img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Y7m49iPYnC6Zj7D2CUm-xCxK0ZUPoRtj01_0YARaTGw_400_2.png",
    title: "Monthly budget",
    style: "Swiss",
  },
  {
    img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Y0k6kdBAPkckZsWz1V0YhFV694ccXtIIv13O5lx1c84_400.png",
    title: "Annual Calendar",
    style: "Bright",
  },
];

export default function Hero({ onShowAllSheets }) {

  const [showAll, setShowAll] = useState(false);
  const [showAllSheetsLocal, setShowAllSheetsLocal] = useState(false);
  const [animating, setAnimating] = useState(false);
  const displayTemplates = showAll ? templatesAll : templates;


  const buttonRef = useRef(null);
  const handleShowAllSheets = () => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut", onComplete: () => {
            if (onShowAllSheets) {
              onShowAllSheets();
            } else {
              setShowAllSheetsLocal(true);
            }
            // Optionally reset position after animation
            gsap.set(buttonRef.current, { y: 0 });
          }
        }
      );
    } else {
      if (onShowAllSheets) {
        onShowAllSheets();
      } else {
        setShowAllSheetsLocal(true);
      }
    }
  };

  const handleCloseAllSheets = () => {
    setAnimating(true);
    setTimeout(() => {
      setShowAllSheetsLocal(false);
      setAnimating(false);
    }, 300); // match animation duration
  };


  // Animation for overlay
  if (showAllSheetsLocal) {
    return (
      <div>
        <Allsheets onClose={handleCloseAllSheets} />
      </div>
    );
  }

  return (
    <section className="" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
      <div className="flex flex-col justify-start bg-gray-100 w-full h-full ">
        <div className="mx-auto max-w-6xl px-2 w-full ">
          <div className="mt-2 mb-2 ">
            <div className="flex items-center  justify-between px-2  ">
              <div className="flex items-center mr-auto   ">
                <h2 className=" text-md text-gray-800">
                  Start a new spreadsheet
                </h2>
              </div>
              <div
                ref={buttonRef}
                onClick={handleShowAllSheets}
                className="flex justify-center items-center font-medium rounded-md px-4 gap-2 py-2 cursor-pointer hover:bg-gray-300"
                style={{ minWidth: 150 }}
              >

                <span className="text-gray-600 text-sm">Template gallery</span>
                <span className="flex flex-col justify-center ml-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              <div className="flex items-center text-md   ">
                <span
                  className="mx-6 h-7 w-px bg-gray-400"
                  style={{ display: "inline-block" }}
                ></span>
                <div
                  className="flex items-center  rounded-md   "
                  style={{ minWidth: 10, height: 40, position: "relative" }}
                >
                  <span
                    className="hover:bg-gray-300 rounded-full"
                    style={{
                      position: "absolute",
                      right: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="5" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="12" cy="19" r="1.5" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-10xl pt-1 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6  gap-2 mx-auto ">
                {displayTemplates.map((tpl, idx) => (
                  <div key={idx} className="cursor-pointer flex flex-col mb-5 mr-5 h-40 ">
                    <div className="hover:border-green-600 pt-3 border border-gray-300 shadow bg-white relative h-32 w-full flex justify-center ">
                      <img
                        src={tpl.img}
                        alt={tpl.title}
                        className="object-cover  "
                      />
                    </div>
                    <div className=" text-start pl-2 pt-2 ">
                      <div className=" text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>{tpl.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
