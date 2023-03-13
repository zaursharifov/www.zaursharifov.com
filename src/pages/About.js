import React from "react";
import Header from "../components/Header";
import "../style/home.css";

export default function About() {
  const visible = true;
  return (
    <div className={`about ${visible && "visible"}`}>
      <Header />
      <div className="a_top">
        <div>
          <span className="circle"></span>
          <span className="triangle"></span>
          <span className="square"></span>
          <span className="square2"></span>
          <h1 className="h_h1">Jr. Full Stack Developer</h1>
          <a href="./about/cv_zaursharifov.pdf" target={"_blank"} className="a_btn">
            RESUME <span className="span">→</span>
          </a>
        </div>
        <div className="a_bottom">

        </div>
      </div>
    </div>
  );
}
