import React from "react";
import Header from "../components/Header";
import { Icon } from "../components/Icons";
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
      <div className="m-contact">
        <div>
          <a href="https://www.linkedin.com/in/zaursharifov-404/" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"linkedin"} size={34} />
          </a>
          <a href="https://github.com/zeraphosa" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"github"} size={34} />
          </a>
          <a href="https://www.instagram.com/zeraphosa/" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"instagram"} size={34} />
          </a>
          <a href="https://open.spotify.com/user/31pqny7qxt3h7yhw3nazyyjuzjr4?si=c8383f65df324cbc" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"spotify"} size={34} />
          </a>
          <a href="https://wa.me/+994705741452" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"whatsapp"} size={34} />
          </a>
          <a href="https://t.me/zeraphosa" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"telegram"} size={34} />
          </a>
          <a href="https://twitter.com/zaursharifov404" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"twitter"} size={34} />
          </a>
          <a href="mailto:zaur.sharifov@outlook.com" className="icon-btn">
            <Icon name={"mail"} size={34} />
          </a>
          <a href="https://discordapp.com/users/1031209551405527150" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"discord"} size={34} />
          </a>
          <a href="https://codepen.io/zaursharifov" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"codepen"} size={34} />
          </a>
          <a href="https://www.upwork.com/freelancers/~012630e0eabc4b2682" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"upwork"} size={34} />
          </a>
          <a href="https://steamcommunity.com/id/zeolone404/" className="icon-btn" target="_blank" rel="noreferrer">
            <Icon name={"steam"} size={34} />
          </a>
        </div>
      </div>
    </div>
  );
}
