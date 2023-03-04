import React from "react";
import "../style/sidebar.css";

export default function Sidebar({ currentIndex, setCurrentIndex }) {
  const pages = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="sidebar">
      {pages.map((item, id) => (
        <button className="btn" key={id} onClick={() => setCurrentIndex(id)}>
          {id === currentIndex ? (
            <>
              <span className="dot">•</span>
              <p className="menu_p">{item}</p>
            </>
          ) : (
            <span className="num">{id}</span>
          )}
        </button>
      ))}
    </div>
  );
}
