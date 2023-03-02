import React from "react";
import Navbar from "../components/Navbar";
import "../style/app.css";

export default function Contact({section}) {
  return (
    <div className="app-content" id={section}>
      <Navbar />
      <div>Contact page</div>
    </div>
  );
}
