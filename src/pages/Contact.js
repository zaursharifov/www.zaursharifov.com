import React from "react";
import Header from "../components/Header";
import "../style/contact.css";

export default function Contact({ setFocusInput }) {
  const visible = true;

  return (
    <>
      <Header />
      <div className={`contact ${visible && "visible"}`}>
        <div className="image">
          <img className="pin" src="./about/maps/circle.png" alt="pin" />
        </div>
        <div className="card" id="mail">
          <input type="text" placeholder="name" onFocus={() => setFocusInput(true)} onMouseLeave={() => setFocusInput(false)} />
          <span class="textarea" role="textbox" contenteditable="true" onFocus={() => setFocusInput(true)} onMouseLeave={() => setFocusInput(false)} />
          <div>
            <button type="submit" className="a_btn">
              SEND <span className="span">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
