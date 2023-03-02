import React from "react";
import Navbar from "../components/Navbar";
import "../style/app.css";

export default function About({section}) {
  return (
    <div className="app-content" id={section}>
      <Navbar />
      <div>About page</div>
    </div>
  );
}
