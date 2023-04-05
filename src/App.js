import React from "react";
import Header from "./pages/Header";
import "./style.css";
import Projects from "./pages/Projects";
import NwProjects from "./pages/NwProjects";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h1>Zaur Sharifov</h1>
      </div>
      <Header />
      <Projects />
      <NwProjects />
    </div>
  );
}
