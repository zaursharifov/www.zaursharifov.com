import React from "react";
import "../style/contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <>
      <img className="pin" src="./about/maps/circle.png" alt="pin" />
      <div className="contact"></div>
      <div className="card">
        <div className="c_txt_container">
          <button className="c_txt">
            <a href="mailto:zaur.sharifov@outlook.com" rel="noreferrer">
              zaur.sharifov@outlook.com
            </a>
          </button>
          <button
            className="c_txt"
            onClick={() => {
              window.open("https://wa.me/+994705741452");
            }}
          >
            +994 70 574 14 52
          </button>
          <button
            className="c_txt"
            onClick={() => {
              window.open("https://wa.me/+905536441452");
            }}
          >
            +905 53 644 14 52
          </button>
        </div>

        <div className="c_btn_container">
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://www.instagram.com/zeraphosa/");
            }}
          >
            <InstagramIcon />
          </button>
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://www.linkedin.com/in/zaursharifov-404/");
            }}
          >
            <LinkedInIcon />
          </button>
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://github.com/zeraphosa");
            }}
          >
            <GitHubIcon />
          </button>
        </div>
      </div>
    </>
  );
}
