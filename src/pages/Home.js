import React from "react";
import Navbar from "../components/Navbar";
import "../style/app.css";

export default function Home() {
  return (
    <div className="app-content">
      <Navbar />
      <div>Home page</div>
    </div>
  );
}
