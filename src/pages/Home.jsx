import React from "react";

import Hero from "../components/Hero";
import RecentSpreadsheets from "../components/sreed";


export default function Home({ showRecentSpreadsheets = true, onShowTemplateGallery }) {
  return (
    <main className="flex flex-col  w-full h-full overflow-auto">
      <Hero onShowTemplateGallery={onShowTemplateGallery} />
      {showRecentSpreadsheets && <RecentSpreadsheets />}
    </main>
  );
}
