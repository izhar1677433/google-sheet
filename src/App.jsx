import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Email from "./components/Email";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import RecentSpreadsheets from "./components/sreed";
import Allsheets from "./components/Allsheets";
import { useState } from "react";
import Tamnavbar from "./components/Tamnavbar";

function App() {
  const [showAllSheets, setShowAllSheets] = useState(false);
  const handleShowAllSheets = () => setShowAllSheets(true);
  const handleCloseAllSheets = () => setShowAllSheets(false);

  return (
    <>
      <div className="">
        {/* Show Navbar only when Allsheets is not open */}
        {!showAllSheets && <Navbar />}
        {/* Show Tamnavbar only when Allsheets is open */}
        {showAllSheets && <Tamnavbar onBack={handleCloseAllSheets} />}
        {/* Show Allsheets overlay or main app routes */}
        {showAllSheets ? (
          <Allsheets onClose={handleCloseAllSheets} />
        ) : (
          <Routes>
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/email" element={<Email />} />
            <Route path="/hero" element={<Hero onShowAllSheets={handleShowAllSheets} />} />
            <Route path="/" element={<Home showRecentSpreadsheets={!showAllSheets} onShowAllSheets={handleShowAllSheets} />} />
            <Route path="/recent-spreadsheets" element={<RecentSpreadsheets />} />
            <Route path="/all-sheets" element={<Allsheets />} />
            
            {/* Removed /template-gallery route */}
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
