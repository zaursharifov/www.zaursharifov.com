import React from "react";
import "../style/contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../components/Navbar";

export default function Contact() {
  const visible = true;
  return (
    <>
      <Navbar />
      <div className={`contact ${visible && "visible"}`}>
        <div className="img-border-container">
          <div className="border edge-l"></div>
          <div className="border edge-r"></div>
          <div className="border edge-t"></div>
          <div className="border edge-b"></div>
          <div className="border corner-tl"></div>
          <div className="border corner-tr"></div>
          <div className="border corner-bl"></div>
          <div className="border corner-br"></div>
          <img className="pin border-content" src="./about/maps/circle.png" alt="pin" />
        </div>
        <div className="card">
          <div className="c_txt_container">
            <button className="c_txt">
              <a className="c_txt" href="mailto:zaur.sharifov@outlook.com" rel="noreferrer">
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
            {/* <button
            className="c_txt"
            onClick={() => {
              window.open("https://wa.me/+905536441452");
            }}
          >
            +905 53 644 14 52
          </button> */}
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
      </div>
    </>
  );
}
