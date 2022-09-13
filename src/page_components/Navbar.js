import React from "react";
import "../style/navbar.css";

export default function Navbar({ isActive, set_isActive }) {
  return (
    <div className="navbar">
      <a className="logo" href="/">
        ZAUR SHARIFOV
      </a>
    </div>
  );
}
