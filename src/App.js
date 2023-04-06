import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import NwProjects from "./components/NwProjects";
import "./style.css";

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
