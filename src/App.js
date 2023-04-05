import React from "react";
import Header from "./pages/Header";
import "./style.css";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h1>Zaur Sharifov</h1>
      </div>
      <Header />
      <h2>Featured Projects</h2>
      <Projects />
    </div>
  );
}
