import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-header">
          <a className="logo" href="/">
            ZAUR SHARIFOV
          </a>
        </div>
        <SideBar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
