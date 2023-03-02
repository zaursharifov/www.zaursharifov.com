import React, { useEffect, useState } from "react";
import "../style/sidebar.css";

export default function Sidebar({ currentIndex, setCurrentIndex }) {
  const pages = ["Home", "Projects", "About", "Contact"];
  function handleClick(event, id) {
    // setClickedId(id);
  }

  return (
    <div className="sidebar">
      {pages.map((item, id) => (
        <button className="btn" onClick={(event) => handleClick(event, id)}>
          {id === currentIndex ? (
            <>
              <span className="dot">•</span>
              <p className="menu_p">{pages[currentIndex]}</p>
            </>
          ) : (
            <span className="num">{id}</span>
          )}
        </button>
      ))}
    </div>
  );
}

// const [clickedId, setClickedId] = useState(0);
/* {i !== clickedId ? (
            <span className="num">{i}</span>
          )  */
