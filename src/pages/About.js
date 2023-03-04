import React from "react";
import { Icon } from "../components/Icons";
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
          <a href="https://www.linkedin.com/in/zaursharifov-404/" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"linkedin"} size={34} />
          </a>
          <a href="https://github.com/zeraphosa" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"github"} size={34} />
          </a>
          <a href="https://www.instagram.com/zeraphosa/" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"instagram"} size={34} />
          </a>
          <a href="https://open.spotify.com/user/31pqny7qxt3h7yhw3nazyyjuzjr4?si=c8383f65df324cbc" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"spotify"} size={34} />
          </a>
          <a href="https://wa.me/+994705741452" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"whatsapp"} size={34} />
          </a>
          <a href="https://t.me/zeraphosa" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"telegram"} size={34} />
          </a>
          <a href="https://twitter.com/zaursharifov404" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"twitter"} size={34} />
          </a>
          <a href="mailto:zaur.sharifov@outlook.com" className="a_img">
            <Icon name={"mail"} size={34} />
          </a>
          <a href="https://discordapp.com/users/1031209551405527150" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"discord"} size={34} />
          </a>
          <a href="https://codepen.io/zaursharifov" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"codepen"} size={34} />
          </a>
          <a href="https://www.upwork.com/freelancers/~012630e0eabc4b2682" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"upwork"} size={34} />
          </a>
          <a href="https://steamcommunity.com/id/zeolone404/" className="a_img" target="_blank" rel="noreferrer">
            <Icon name={"steam"} size={34} />
          </a>
        </div>
      </div>
    </div>
  );
}
