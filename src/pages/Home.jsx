import React, { useState } from "react";

import Hero from "../components/Hero";
import RecentSpreadsheets from "../components/sreed";


export default function Home({ showRecentSpreadsheets = true, onExpandChange: parentOnExpandChange, externalOpen }) {
  const [heroExpanded, setHeroExpanded] = useState(false);
  const handleExpandChange = parentOnExpandChange ?? setHeroExpanded;
  const heroIsExpanded = typeof externalOpen !== "undefined" ? externalOpen : heroExpanded;

  return (
    <main className="flex container flex-col  w-full h-full overflow-hidden">
      <Hero onExpandChange={handleExpandChange} externalOpen={externalOpen} />
      {!heroIsExpanded && showRecentSpreadsheets && <RecentSpreadsheets />}
    </main>
  );
}
