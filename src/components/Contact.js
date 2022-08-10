import React from "react";
import "../style/contact.css";

export default function Contact() {
  return (
    <>
      <img className="pin" src="./about/maps/pin.png" alt="pin" />
      <div className="contact"></div>
      <div className="card">
        <div className="c_txt_container">
          <button className="c_txt">zaur.sharifov@outlook.com</button>
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
            instagram
          </button>
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://www.linkedin.com/in/zaursharifov-404/");
            }}
          >
            linkedin
          </button>
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://github.com/zeraphosa");
            }}
          >
            github
          </button>
        </div>
      </div>
    </>
  );
}
