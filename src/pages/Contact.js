import React from "react";
import Header from "../components/Header";
import "../style/contact.css";

export default function Contact() {
  const visible = true;
  return (
    <>
      <Header />
      <div className={`contact ${visible && "visible"}`}>
        <img className="pin border-content" src="./about/maps/circle.png" alt="pin" />
        <form className="card" id="mail">
          <input type="text" placeholder="name" />
          <textarea form="mail" placeholder="message" />
          <input type="submit" placeholder="Submit" />
        </form>
      </div>
    </>
  );
}
