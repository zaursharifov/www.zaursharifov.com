import React from "react";
import Navbar from "../components/Navbar";
import "../style/app.css";

export default function Contact() {
  const visible = true;
  return (
    <div className={`app-content ${visible && "visible"}`}>
      <Navbar />
      <div>Contact page</div>
    </div>
  );
}
