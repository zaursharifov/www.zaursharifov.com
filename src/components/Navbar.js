import { useState } from "react";
import "../style/navbar.scss";

export default function Navbar() {
  const [isActive, set_isActive] = useState(false);
  return (
    <div className="navbar">
      <h1 className="logo">ZAUR SHARIFOV</h1>
      <div
        className={`menu_wrapper ${isActive ? "open" : null}`}
        onClick={() => set_isActive(!isActive)}
      >
        <div className="line_menu half start"></div>
        <div className="line_menu"></div>
        <div className="line_menu half end"></div>
      </div>
    </div>
  );
}
