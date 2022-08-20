import React from "react";
import "../style/navbar.css";

export default function Navbar({ isActive, set_isActive }) {
  return (
    <div className="navbar">
      <a className="logo" href="/">
        ZAUR SHARIFOV
      </a>
      {/* <button
        className={`menu_wrapper ${isActive ? "open" : null}`}
        onClick={() => set_isActive(!isActive)}
      >
        <div className="line_menu half start"></div>
        <div className="line_menu"></div>
        <div className="line_menu half end"></div>
      </button> */}
    </div>
  );
}
