import React from "react";
// import "../style/home.css";

export default function About() {
  return (
    <div className="home">
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
          <img className="a_img" src="./about/companies/bitsody.jpg" alt="bitsody" />
          <img className="a_img" src="./about/companies/buta.jpg" alt="buta" />
          <img className="a_img" src="./about/companies/fiverr.jpg" alt="fiverr" />
          <img className="a_img" src="./about/companies/utest.png" alt="utest" />
        </div>
      </div>
    </div>
  );
}
