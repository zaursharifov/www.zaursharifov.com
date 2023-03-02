import React from "react";
import Navbar from "../components/Navbar";
import "../style/app.css";

export default function Projects({ section }) {
  return (
    <div className="app-content" id={section}>
      <Navbar />
      <div>Projects page</div>
    </div>
  );
}
