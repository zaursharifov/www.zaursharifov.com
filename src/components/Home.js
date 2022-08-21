import React from "react";
import "../style/home.css";

export default function Home({ set_component }) {
  return (
    <div className="home">
      <div className="top">
        <div>
          <h1 className="h_h1">Creative websites for your brand</h1>
          <button
            className="h_btn"
            onClick={() => {
              set_component("Contact");
            }}
          >
            CONTACT ME →
          </button>
        </div>
        <img className="h_img" src="./about/home.png" alt="home_png" />
      </div>
      <div className="h_line"></div>
      <div className="bottom">
        <div className="b_section">
          <h2>Front end development</h2>
          <p>HTML5 / CSS / Javascript / React JS</p>
        </div>
        <div className="b_section">
          <h2>Back end development</h2>
          <p>Node js / Mongo DB / MySql</p>
        </div>
        <div className="b_section">
          <h2>Mobile development</h2>
          <p>React Native</p>
        </div>
      </div>
    </div>
  );
}
