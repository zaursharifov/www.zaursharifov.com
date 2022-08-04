import { useState } from "react";
import "../style/navbar.scss";
import "../style/app.scss";

export default function Navbar() {
  const [isActive, set_isActive] = useState(false);
  return (
    <div className="navbar">
      <a className="logo" href="/">
        ZAUR SHARIFOV
      </a>
      <a
        href="/"
        className={`menu_wrapper ${isActive ? "open" : null}`}
        onClick={() => set_isActive(!isActive)}
      >
        <div className="line_menu half start"></div>
        <div className="line_menu"></div>
        <div className="line_menu half end"></div>
      </a>
    </div>
  );
}
