import React from "react";
import "../style/about.css";

export default function About() {
  return (
    <div className="about">
      <div className="a_top">
        <div>
          <h1 className="a_h1">Jr. Full Stack Developer</h1>
          <button className="resume"
            onClick={() => {
              console.log("tiklandi");
            }}
          >
            RESUME <span>↗</span>
          </button>
        </div>
        <img className="at_img" src="./about/home.png" alt="home_png" />
      </div>
      <div className="a_bottom">
        <img className="a_img" src="./about/companies/bitsody.jpg" alt="bitsody" />
        <img className="a_img" src="./about/companies/buta.jpg" alt="buta" />
        <img className="a_img" src="./about/companies/fiverr.jpg" alt="fiverr" />
        <img className="a_img" src="./about/companies/utest.png" alt="utest" />
        <img className="a_img" src="./about/companies/appen.jpg" alt="appen" />
      </div>
    </div>
  );
}
