// {
//     "resume_link": "./about/cv_zaursharifov.pdf",
//     "photo": "",
//     "home_photo": "./about/home.jpg",
//     "last_companies": "bitsody",
//     "map": "",
//     "linkedin": "https://www.linkedin.com/in/zaursharifov-404/",
//     "github": "https://github.com/zeraphosa",
//     "email": "zaursharifov@outlook.com",
//     "phone_0": "+994 70 574 14 52",
//     "phone_1": "+90 553 644 14 52",
//     "address": "Baku / Azerbaijan",
//     "instagram": "https://www.instagram.com/zeraphosa/"
//   },

import React from "react";
import "../style/home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="top">
        <div>
          <h1>Creative websites for your brand</h1>
          <button
            onClick={() => {
              console.log("tiklandi");
            }}
          >
            CONTACT ME <span>↗</span>
          </button>
        </div>
        <img src="./about/home.png" alt="home_png" />
      </div>
      <div className="line"></div>
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
