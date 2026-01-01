import { Search } from "lucide-react";
import { useState } from "react";
import { Popover } from "antd";
import Sidebar from "./Sidebar";
import Email from "./Email";
import GoogleAppPopover from "./googleapp";
import { useNavigate } from "react-router-dom";

export default function SheetsHeader({ isTemplateOpen, onCloseTemplate }) {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onMenuClick = () => setOpen((prev) => !prev);



  const [appsOpen, setAppsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <header
        className="container flex items-center p-2 h-16 w-full  font-roboto sticky top-0 z-50 bg-white"
        style={{ fontFamily: "'Product Sans', Arial, sans-serif" }}
      >

        {isTemplateOpen ?
          <>
            <div className="flex  items-center  gap-2.5 px-2 hover:cursor-pointer  shrink-0">
              <button
                type="button"
                className="mr-4 p-2 rounded-full hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof onCloseTemplate === "function") onCloseTemplate();
                  else navigate(-1);
                }}
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
              <span className="text-lg font-normal text-gray-900">Template gallery</span>
            </div>
          </>
          :

          <>
            <div className="flex items-center gap-2.5 px-2 hover:cursor-pointer  shrink-0">
              <div
                className="p-3 rounded-full hover:bg-gray-200"
                onClick={onMenuClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                  />
                </svg>
              </div>
              <Sidebar open={open} onClose={onClose} placement="left" />
              <img
                src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"
                alt="Sheets"
                className="w-10 h-10"
              />
              <span className="text-xl font-normal text-black">Sheets</span>
            </div>

            {/* Center Search */}
            <div className="flex-1 flex justify-center px-20">
              <div className="flex items-start mr-20 gap-2 px-5 py-3 bg-gray-100 rounded-full w-full max-w-180">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>  <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 w-[20vh] bg-transparent outline-none text-md text-black"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center  gap-6 shrink-0 m-auto mr-4">
              {/* Google Apps Button and Popover */}
              <Popover
                className="bg-gray-50"
                content={<GoogleAppPopover />}
                trigger="click"
                open={appsOpen}
                onOpenChange={setAppsOpen}
                placement="bottomRight"
                overlayClassName="google-apps-popover"
              >
                <div
                  className="rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer p-2 "
                >
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M5.5 16.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5.5 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-13-6.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </Popover>

              <div className="flex justify-center items-center w-fit rounded-full hover:cursor-pointer">
                <Email />
              </div>
            </div>
          </>


        }
      </header >
    </>
  );
}
