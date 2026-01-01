import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tamnavbar from "./components/Tamnavbar";
import { useState } from "react";
import "./index.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Email from "./components/Email";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import RecentSpreadsheets from "./components/sreed";

function App() {
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);


  return (
    <>
      <div className=" h-full w-full ">
        {!isTemplateOpen && <Navbar />}
        {isTemplateOpen && <Tamnavbar onBack={() => setIsTemplateOpen(false)} />}
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/email" element={<Email />} />
          <Route path="/hero" element={<Hero onExpandChange={(open) => setIsTemplateOpen(open)} externalOpen={isTemplateOpen} />} />
          <Route path="/" element={<Home onExpandChange={(open) => setIsTemplateOpen(open)} externalOpen={isTemplateOpen} />} />
          <Route path="/recent-spreadsheets" element={<RecentSpreadsheets />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
