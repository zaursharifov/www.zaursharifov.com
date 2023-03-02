import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./style/app.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <a className="logo" href="/">
          ZAUR SHARIFOV
        </a>
      </div>
      <Sidebar />
      <>
        <Home />
        <Projects />
        <About />
        <Contact />
      </>
    </div>
  );
}
