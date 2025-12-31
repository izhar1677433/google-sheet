import React, { useRef } from "react";
import Tamnavbar from "./Tamnavbar";
import "../App.css";


// The section with title "Recently used templates" is intentionally only shown on the main landing page (Hero),
// and is NOT included in the template gallery overlay. This matches Google Sheets' UI, where
// "Recently used templates" are visible on the main page but not inside the template gallery overlay.
// In the overlay, we use sheetSections.slice(1) to skip this section.
const sheetSections = [
  {
    title: "Recently used templates",
    sheets: [
      {
        name: "Blank spreadsheet",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/sheets-blank-googlecolors.png",
      },
      {
        name: "Google Finance Invest...",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1RMjNlAiz9clPyEQbF87uEqRk_BZLFUzE8rW4z91kyAE_400.png",
      },
      {
        name: "To-do list",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1eKIzWlFfO9IXwCke-mdai1Nx2jj0yaNDfiQAhNCu1vk_400_4.png",
      },
      {
        name: "Annual budget",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/136ONFfL81Pzpysd3lUU8T1i-fQ_CvT0pMUmwNinkXf4_400_3.png",
      },
      {
        name: "Monthly budget",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Y7m49iPYnC6Zj7D2CUm-xCxK0ZUPoRtj01_0YARaTGw_400_2.png",
      },
      {
        name: "Annual Calendar",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Y0k6kdBAPkckZsWz1V0YhFV694ccXtIIv13O5lx1c84_400.png",
      },
    ],
  },
  {
    title: "Personal",
    sheets: [
      {
        name: "To-do list",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1eKIzWlFfO9IXwCke-mdai1Nx2jj0yaNDfiQAhNCu1vk_400_4.png",
      },
      {
        name: "Annual budget",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/136ONFfL81Pzpysd3lUU8T1i-fQ_CvT0pMUmwNinkXf4_400_3.png",
      },
      {
        name: "Monthly budget",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Y7m49iPYnC6Zj7D2CUm-xCxK0ZUPoRtj01_0YARaTGw_400_2.png",
      },
      {
        name: "Google Finance Investment Tracker",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1RMjNlAiz9clPyEQbF87uEqRk_BZLFUzE8rW4z91kyAE_400.png",
      },
      {
        name: "Annual Calendar",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Y0k6kdBAPkckZsWz1V0YhFV694ccXtIIv13O5lx1c84_400.png",
      },
      {
        name: "Schedule",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1vSL2HSbhllUA5EimL3ceWJf1dsYS3wzQq8Oml32Ur5U_400_2.png",
      },
      {
        name: "Travel planner",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Mnwc0S3jKGK4gsDKK9uKgso9aFZIzHfwU6Z46PRWP0w_400_2.png",
      },
      {
        name: "Wedding planner",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1tW4CAX7PG26T8vjqd52IOf4IobIq5F2jOl6H2kxjoSg_400_2.png",
      },
      {
        name: "Team roster",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1VvxDFciWKRwl-2yoQOaaCBTabWR7P3N_C9roIsesYnk_400_2.png",
      },
      {
        name: "Pros and cons",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1GoUUQ-vECWHnb6GMqsN9Z95D0xE_k4PuYwgER4PK0lY_400_1.png",
      },
    ],
  },
  {
    title: "Work",
    sheets: [
      {
        name: "Invoice",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1zVHCsOtHoBgnNEfuVbl-5XnXmVyC2IpcCN3nfzm-bKw_400.png",
      },
      {
        name: "Weekly time sheet",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1HId4XEcIdNrKLJOcvh_33czmd74ZSe2Uepz5PaXtAWg_400_3.png",
      },
      {
        name: "Annual business budget",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1QA1iSipDiKoOyI04I8HfU5ZuASD7tlc6QV4NU5ah1s4_400_1.png",
      },
      {
        name: "Expense report",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1BJRClG6f19dOr_13jBIUBPvgajZs7w1QbBJosXLvYWE_400_3.png",
      },
      {
        name: "Purchase order",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1O8VTE_srDHAROiOydqJ8FrcbUEx9PjarLHIhDBroh0A_400_3.png",
      },
      {
        name: "Employee shift schedule",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1zVHCsOtHoBgnNEfuVbl-5XnXmVyC2IpcCN3nfzm-bKw_400.png",
      },
      {
        name: "Customer relationship management ",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1CXujXoOYmm-AgpDvn9jtoYcedo3-YV0RHz8cPvrsQWM_400_1.png",
      },
      {
        name: "Website paid traffic report",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1ZiZ9SLNRVlNdLzLdkSeP0SdxuhjJ27FaxISWz13ARZs_400.png",
      },
      {
        name: "Website trafic dashboard",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/11sMRtb3OEsOHDlRWH9J19dqKFm_m6tI02KHaNTJ2ono_400.png",
      },
      {
        name: "Analysis dashboard",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1nupyzarH8V9YirAwfymX-DgRNoHZNKZROXIpNYn_ngc_400.png",
      },
    ],
  },
  {
    title: "Project management",
    sheets: [
      {
        name: "Gantt chart",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/14XRe2azaa1Q5wsbfka-g6wo-SR6Hd7gLmI8-Jw1Zs_Y_400_1.png",
      },
      {
        name: "Project timeline",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1hQWw0sBP1xAqpdEyteNNHIv7NGz8YYeekJYJJu7EmSY_400.png",
      },
      {
        name: "Project tracking",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1hQWw0sBP1xAqpdEyteNNHIv7NGz8YYeekJYJJu7EmSY_400.png",
      },
      {
        name: "Event planning timeline",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1hdX70QKTi3icEfdReos6xIOWPwo9PqyFI5QP3zCg3bM_400_1.png",
      },
    ],
  },
  {
    title: "Education",
    sheets: [
      {
        name: "Attendance",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1Yc58gwJXfFqtvBaXkexKSIHsXRwvy6MZBlsaIpqWzmY_400_2.png",
      },
      {
        name: "Grade book",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1nBKMfP_CjgOfXx9ExXEhbE8B5l6kxMWwzc-54vCLEv8_400_4.png",
      },
      {
        name: "Assignment tracking",
        img: "https://ssl.gstatic.com/docs/templates/thumbnails/1g5ra22wNmQJR1GbumtkSjPw_PXKMG6wpveAMsCN0YwQ_400.png",
      },
    ],
  },
];


export default function Hero({ showTemplateGallery, onShowTemplateGallery, onShowAllSheets }) {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  if (showTemplateGallery) {
    return (
      <div ref={bgRef} className="min-h-screen " style={{ backgroundColor: '#f8fafc' }}>
        <div className="space-y-12 mx-auto max-w-6xl pt-2">
          <div className="flex flex-col gap-8 px-4">
            {/* Show all sections, including 'Recently used templates', in the overlay */}
            {sheetSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-normal mb-4">{section.title}</h3>
                <div className={
                  section.title === "Recently used templates"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mx-auto"
                    : section.title === "Personal" || section.title === "Work"
                      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 mx-auto"
                      : section.title === "Project management" || section.title === "Education"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-0 mx-auto"
                        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mx-auto"
                }>
                  {section.sheets.map((sheet) => {
                    const isRecentlyUsed = section.title === "Recently used templates";
                    const isPersonalOrWork = section.title === "Personal" || section.title === "Work";
                    const isProjectOrEdu = section.title === "Project management" || section.title === "Education";
                    const cardClass = "cursor-pointer flex flex-col mb-5 mr-5 w-44";
                    const imgClass = isRecentlyUsed
                      ? "hover:border-green-600 pt-3 border border-gray-300 shadow bg-white relative h-32 w-full flex justify-center"
                      : isPersonalOrWork
                        ? "hover:border-green-600 pt-5 border border-gray-300 shadow bg-white relative h-36 w-full flex justify-center"
                        : isProjectOrEdu
                          ? "hover:border-green-600 pt-3 border border-gray-300 shadow bg-white relative h-32 w-full flex justify-center"
                          : "hover:border-green-600 pt-3 border border-gray-300 shadow bg-white relative h-32 w-full flex justify-center";
                    return (
                      <div
                        key={sheet.name}
                        className={cardClass}
                      >
                        <div className={imgClass}>
                          <img
                            src={sheet.img}
                            alt={sheet.name}
                            className="object-cover  "
                          />
                        </div>
                        <span className="text-start pl-2 pt-2 text-sm w-full truncate" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                          {sheet.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Use Tailwind's animate-[custom] utility for a slide-down effect on mount
  // Custom keyframes for slide-down (add to your CSS if not present)
  // @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
  // .animate-slideDown { animation: slideDown 0.5s cubic-bezier(0.4,0,0.2,1) both; }

  return (
    <section className="" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
      <div className="flex flex-col justify-start bg-gray-100   w-full h-full min-h-65   ">
        <div className="mx-auto max-w-6xl px-2 w-full ">
          <div className="mt-2 mb-2 ">
            <div className="flex items-center  justify-between px-2  ">
              <div className="flex items-center mr-auto   ">
                <h2 className=" text-md text-gray-800">
                  Start a new spreadsheet
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div
                  ref={buttonRef}
                  onClick={onShowTemplateGallery || onShowAllSheets}
                  className="flex justify-center items-center font-medium rounded-md  px-4 gap-2 py-2 cursor-pointer hover:bg-gray-300"
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
                {/* Vertical divider line */}
                <div className="mx-2 h-7 w-px bg-gray-400" style={{ display: "inline-block" }}></div>
                {/* Icon 1: More (three dots) */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300 cursor-pointer">
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
                </div>

              </div>
            </div>
            {/* 'Recently used templates' is intentionally placed above 'Personal' to match Google Sheets' UI. */}
            <div className="max-w-10xl pt-1 mx-auto ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mx-auto ">
                {sheetSections[0].sheets.map((sheet) => (
                  <div
                    key={sheet.name}
                    className="cursor-pointer flex flex-col  mb-5 mr-5 w-44"
                  >
                    <div className="hover:border-green-600 pt-3  border border-gray-300 shadow bg-white relative h-32 w-full flex justify-center ">
                      <img
                        src={sheet.img}
                        alt={sheet.name}
                        className="object-cover  "
                      />
                    </div>
                    <span className="text-start pl-2 pt-2 text-sm w-full truncate" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                      {sheet.name}
                    </span>
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
