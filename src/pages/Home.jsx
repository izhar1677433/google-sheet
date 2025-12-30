import React from "react";

import Hero from "../components/Hero";
import RecentSpreadsheets from "../components/sreed";


export default function Home({ showRecentSpreadsheets = true, onShowAllSheets }) {
  return (
    <main className="flex flex-col  w-full h-full overflow-auto">
      <Hero onShowAllSheets={onShowAllSheets} />
      {showRecentSpreadsheets && <RecentSpreadsheets />}
    </main>
  );
}
