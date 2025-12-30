import { UserCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Email = () => {
  const [open, setOpen] = useState(false);
  const [showAccountList, setShowAccountList] = useState(true);
  const popoverRef = useRef(null);

  const showEmailPopover = () => setOpen(true);
  const closePopover = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <span
        className="w-8 h-8 cursor-pointer text-gray-700 hover:text-gray-900 inline-block"
        onClick={showEmailPopover}
      >
        <UserCircle2 className="w-8 h-8" />
      </span>
      {open && (
        <div
          ref={popoverRef}
          className="w-100  rounded-3xl shadow-lg  absolute top-16 right-5   font-sans text-[#222] bg-gray-100 border-none z-100"
        >
          <div className="p-4">
          {/* Email at top */}
          <div className="text-center mt-1 ">
            <div className="text-[15px] mb-2 font-normal">
              izhar9812488@gmail.com
            </div>
            <div className="relative inline-block mt-4">
              <img
                src="https://avatars.githubusercontent.com/u/104003530?v=4"
                alt="Profile"
                className="w-22 h-22 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md border border-[#eee]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#444"
                  className="w-22 h-22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232a3 3 0 014.243 4.243L7.5 21H3v-4.5L15.232 5.232z"
                  />
                </svg>
              </span>
            </div>
            <div className="font-normal text-[20px] mb-2">Hi, IZHAR!</div>
            <button className=" border border-gray-500 rounded-full px-6 py-2 text-[14px]  text-[#1967d2] cursor-pointer mb-4 hover:bg-gray-100 font-medium">
              Manage your Google Account
            </button>
            <div className="flex  items-start justify-center mx-auto w-full mb-4">
              <button className="flex items-left justify-start  bg-white rounded-l-full py-4 px-2 w-full text-[16px] text-gray-900 font-normal hover:bg-gray-100 border border-[#eaf1fb] items-center">
               <span style={{ background: '#eaf1fb', borderRadius: '50%', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px' }}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1967d2" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>
               </span>
                Add account
              </button>
              
              <button className="flex items-start justify-start max-w-full bg-white w-full rounded-r-full py-5 px-2 text-[16px] text-gray-900 font-normal hover:bg-gray-100 border border-[#eaf1fb] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"/></svg>
                Sign out
              </button>
            </div>
          </div>
         
          {/* Storage info */}
          <div className="rounded-full mb-4  px-4 py-4 flex items-center gap-3 bg-white ">
            <img
              src="https://www.gstatic.com/images/icons/material/system/2x/cloud_googblue_24dp.png"
              alt="Cloud"
              className="w-6 h-6 "
            />
            <span className="text-[14px] font-medium">82% of 15 GB used</span>
          </div>
          {/* Footer */}
          <div className="text-center text-[14px] text-[#888]  font-normal">
            <span className="mr-2 cursor-pointer underline">
              Privacy Policy
            </span>
            <span>·</span>
            <span className="ml-2 cursor-pointer underline">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Email;
