import React from "react";
import Navbar from "../components/Navbar";
import "../style/app.css";

export default function Projects() {
  const visible = true;
  return (
    <div className={`app-content ${visible && "visible"}`}>
      <Navbar />
      <div>Projects page</div>
    </div>
  );
}
