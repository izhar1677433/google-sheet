import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Email from "./components/Email";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import RecentSpreadsheets from "./components/sreed";
import { useState } from "react";
import Tamnavbar from "./components/Tamnavbar";

function App() {
  const [showTemplateGallery, setShowTemplateGallery] = useState(false);
  const handleShowTemplateGallery = () => setShowTemplateGallery(true);
  const handleCloseTemplateGallery = () => setShowTemplateGallery(false);

  return (
    <>
      <div className="">
        {/* Show Navbar only when template gallery is not open */}
        {!showTemplateGallery && <Navbar />}
        {/* Show Tamnavbar only when template gallery is open */}
        {showTemplateGallery && <Tamnavbar onBack={handleCloseTemplateGallery} />}
        {/* Show template gallery overlay or main app routes */}
        {showTemplateGallery ? (
          <Hero showTemplateGallery={showTemplateGallery} onShowTemplateGallery={handleShowTemplateGallery} onCloseTemplateGallery={handleCloseTemplateGallery} />
        ) : (
          <Routes>
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/email" element={<Email />} />
            <Route path="/hero" element={<Hero showTemplateGallery={showTemplateGallery} onShowTemplateGallery={handleShowTemplateGallery} onCloseTemplateGallery={handleCloseTemplateGallery} />} />
            <Route path="/" element={<Home showRecentSpreadsheets={!showTemplateGallery} onShowTemplateGallery={handleShowTemplateGallery} />} />
                        <Route path="/" element={<Home showRecentSpreadsheets={!showTemplateGallery} onShowTemplateGallery={handleShowTemplateGallery} onShowAllSheets={handleShowTemplateGallery} />} />
            <Route path="/recent-spreadsheets" element={<RecentSpreadsheets />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
