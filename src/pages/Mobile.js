import React from "react";
import Header from "../components/Header";
// import { Icon } from "../components/Icons";
import Projects from "../pages/Projects";

export default function Mobile() {
  return (
    <div className="m-container">
      <div className="m-header">
        <Header />
      </div>
      <div className="m-home">
        <h1>Jr. Full Stack Developer</h1>
        <a className="resume-btn" href="./assets/cv_zaursharifov.pdf" target={"_blank"}>
          RESUME →
        </a>
        <div className="home-line m-line"></div>
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
      <div className="m-projects">
        <Projects />
      </div>
      <div className="m-contact" id="contact"></div>
    </div>
  );
}
