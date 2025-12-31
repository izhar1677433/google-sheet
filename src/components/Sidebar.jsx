import React from "react";
import { Drawer } from "antd";

function HelpIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
    </svg>
  );
}

function SettingsIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.14 12.936q0 .25.012.487l2.075 1.6q.175.125.175.337t-.175.338l-2 2.15q-.125.125-.35.125t-.35-.125l-2.45-1.05q-.475.35-1 .6l-.375 2.6q-.025.2-.175.325t-.35.125h-2.4q-.2 0-.35-.125t-.175-.325l-.375-2.6q-.525-.25-1-.6l-2.45 1.05q-.125.075-.35.075t-.35-.125l-2-2.15q-.175-.125-.175-.338t.175-.337l2.075-1.6q.013-.237.013-.487t-.013-.488L2.86 9.936q-.175-.125-.175-.337t.175-.338l2-2.15q.125-.125.35-.125t.35.125l2.45 1.05q.475-.35 1-.6l.375-2.6q.025-.2.175-.325t.35-.125h2.4q.2 0 .35.125t.175.325l.375 2.6q.525.25 1 .6l2.45-1.05q.125-.075.35-.075t.35.125l2 2.15q.175.125.175.338t-.175.337l-2.075 1.6c-.013.237-.013.487-.013.488zM12 15.5q1.5 0 2.55-1.05T15.6 12q0-1.5-1.05-2.55T12 8.4q-1.475 0-2.487 1.05T8.45 12q0 1.475 1.013 2.487T12 15.5z" />
    </svg>
  );
}

export default function Sidebar({ open, onClose, placement = "left" }) {
  const items = [
    {
      label: "Docs",
      img: "https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png",
    },
    {
      label: "Sheets",
      img: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png",
    },
    {
      label: "Slides",
      img: "https://www.gstatic.com/images/branding/product/1x/slides_2020q4_48dp.png",
    },
    {
      label: "Vids",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Google_Vids_2024_Logo.svg",
    },
    {
      label: "Forms",
      img: "https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png",
    },
    {
      label: "Settings",
      img: null,
    },
    {
      label: "Help & Feedback",
      img: null, // use HelpIcon fallback
    },
    {
      label: "Drive",
      img: "https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png",
    },
  ];

  return (
    <>
      {/* remove slide/animation for antd Drawer */}

      <Drawer
        maskStyle={{ backdropFilter: "none", background: "transparent" }}
        className=" text-sm font-roboto relative text-gray-800  "
        style={{ fontFamily: "'Roboto', Arial, sans-serif", fontWeight: 100 }}
        title={
          <div className="flex items-center gap-1 font-roboto ">
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Sheets"
              className="w-18 h-9"
            />
            <span className="text-xl font-medium mb-1 text-gray-600">
              Sheets
            </span>
          </div>
        }
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        width={280}
        headerStyle={{ borderBottom: "3px solid gray-800" }}
        bodyStyle={{ padding: 12, height: "calc(200vh - 64px)" }} // ensure drawer body fills viewport height
      >
        <div className="flex flex-col text-sm gap-1 mb-15 font-roboto px-0">
          {items.map((item) => (
            <React.Fragment key={item.label}>
              <button
                className="flex items-center gap-3 w-full text-left py-2 px-4 hover:bg-gray-100 rounded-r-lg"
                onClick={() => onClose()}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-5 h-5"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png";
                    }}
                  />
                ) : item.label === "Help & Feedback" ? (
                  <HelpIcon className="w-5 h-5" />
                ) : (
                  <SettingsIcon className="w-5 h-5" />
                )}
                <span className="text-sm text-gray-800 font-normal">
                  
                  {item.label}
                </span>
              </button>

              {(item.label === "Forms" || item.label === "Help & Feedback") && (
                <div className="w-full border-t border-gray-200 my-1" />
              )}
            </React.Fragment>
            
          ))}
          <div className="flex flex-col" /> {/* pushes footer to the bottom */}
          <div className="w-full gap-2 absolute bottom-4 left-0 px-4">
            <div className="flex items-center text-sm text-gray-500 gap-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span className="text-gray-500 text-2xl">·</span>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
