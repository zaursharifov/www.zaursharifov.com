import React from "react";
import Contact from "./Contact";

export default function Home() {
  const visible = true;
  return (
    <div className={`home ${visible && "visible"}`}>
      <div className="home-top">
        <div>
          <h1>Jr. Full Stack Developer</h1>
          <a className="resume-btn" href="./assets/cv-zaursharifov.pdf" target={"_blank"}>
            RESUME →
          </a>
        </div>
        <div className="contact">
          <Contact />
        </div>
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
