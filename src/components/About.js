import React from "react";
import "../style/home.css";

export default function About() {
  return (
    <div className="home">
      <div className="top">
        <div>
          <h1 className="h_h1">Jr. Full Stack Developer</h1>
          <a
            href="./about/cv_zaursharifov.pdf"
            target={"_blank"}
            className="a_btn"
          >
            RESUME →
          </a>
        </div>
        <img className="h_img" src="./about/home.png" alt="home_png" />
      </div>
      <div className="a_bottom">
        <img
          className="a_img"
          src="./about/companies/bitsody.jpg"
          alt="bitsody"
        />
        <img className="a_img" src="./about/companies/buta.jpg" alt="buta" />
        <img
          className="a_img"
          src="./about/companies/fiverr.jpg"
          alt="fiverr"
        />
        <img className="a_img" src="./about/companies/utest.png" alt="utest" />
        <img className="a_img" src="./about/companies/appen.jpg" alt="appen" />
      </div>
    </div>
  );
}
