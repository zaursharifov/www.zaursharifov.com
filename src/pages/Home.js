import React from "react";
import Header from "../components/Header";
import "../style/app.css";
import "../style/home.css";

export default function Home({ setCurrentIndex }) {
  const visible = true;
  return (
    <div className={`home ${visible && "visible"}`}>
      <Header />
      <div className="home-top">
        <div>
          <h1>Jr. Full Stack Developer</h1>
          <a href="./about/cv_zaursharifov.pdf" target={"_blank"}>
            RESUME →
          </a>
        </div>
        <img src="./about/astronaut.png" alt="astronaut" />
      </div>
      <div className="home-line"></div>
      <div className="home-bottom">
        <div className="home-section">
          <h2>Front end development</h2>
          <p>HTML5 / CSS / Javascript / React JS</p>
        </div>
        <div className="home-section">
          <h2>Back end development</h2>
          <p>Node js / Mongo DB / MySql</p>
        </div>
        <div className="home-section">
          <h2>Mobile development</h2>
          <p>React Native</p>
        </div>
      </div>
    </div>
  );
}
