import React from "react";
import "../style/about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="top">
        <div>
          <h1>Jr. Full Stack Developer</h1>
          <button
            onClick={() => {
              console.log("tiklandi");
            }}
          >
            RESUME <span>↗</span>
          </button>
        </div>
        <img src="./about/home.png" alt="home_png" />
      </div>
      <div className="bottom">
        <img src="./about/bitsody.jpg" alt="bitsody" />
        <img src="./about/buta.jpg" alt="buta" />
        <img src="./about/fiverr.jpg" alt="fiverr" />
        <img src="./about/utest.png" alt="utest" />
        <img src="./about/appen.jpg" alt="appen" />
      </div>
    </div>
  );
}
