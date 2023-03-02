import React from "react";
import Navbar from "../components/Navbar";
import "../style/app.css";

export default function Home({section}) {
  return (
    <div className="app-content" id={section}>
      <Navbar />
      <div>Home page</div>
    </div>
  );
}
