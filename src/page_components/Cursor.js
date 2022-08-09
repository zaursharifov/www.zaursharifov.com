import React, { useEffect, useState } from "react";
import "../style/app.css";


export default function Cursor({changeComponent}) {
  const [position, set_position] = useState({ x: 0, y: 0 });
  const [hidden, set_hidden] = useState(false);
  const [click, set_click] = useState(false);
  const [linkHover, set_linkHover] = useState(false);

  useEffect(() => {
    function addEventListener() {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    }
    function removeEventListener() {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    }
    function mDown() {
      set_click(true);
    }
    function mUp() {
      set_click(false);
    }
    function mMove(e) {
      set_position({ x: e.clientX, y: e.clientY });
    }
    function mEnter() {
      set_hidden(false);
    }
    function mLeave() {
      set_hidden(true);
    }

    function addLinkEvents() {
      document.querySelectorAll("a").forEach((e) => {
        e.addEventListener("mouseover", () => set_linkHover(true));
        e.addEventListener("mouseout", () => set_linkHover(false));
      });
      document.querySelectorAll("button").forEach((e) => {
        e.addEventListener("mouseover", () => set_linkHover(true));
        e.addEventListener("mouseout", () => set_linkHover(false));
      });
    }
    addLinkEvents();
    addEventListener();
    return () => removeEventListener();
  }, [changeComponent]);
  return (
    <div
      className={`cursor ${hidden ? "c_hidden" : ""} ${
        click ? "c_click" : ""
      } ${linkHover ? "c_hover" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
}
