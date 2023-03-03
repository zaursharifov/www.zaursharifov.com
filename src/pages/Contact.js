import React from "react";
import Header from "../components/Header";
import "../style/contact.css";

export default function Contact() {
  const visible = true;
  return (
    <>
      <Header />
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
        <form className="card" id="mail">
            <input type="text" placeholder="name"/>
            <textarea form="mail" placeholder="message"/>
            <input type="submit" placeholder="Submit"/>
        </form>
      </div>
    </>
  );
}
