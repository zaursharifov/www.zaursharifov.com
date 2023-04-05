import React from "react";

export default function Sidebar({ currentIndex, setCurrentIndex }) {
  const pages = ["Home", "Projects", "Contact"];

  return (
    <div className="sidebar">
      {pages.map((item, id) => (
        <button className="sidebar-btn" key={id} onClick={() => setCurrentIndex(id)}>
          {id === currentIndex ? (
            <>
              <span className="sidebar-dot">•</span>
              <p>{id}</p>
            </>
          ) : (
            <span className="sidebar-num">{id}</span>
          )}
        </button>
      ))}
    </div>
  );
}
