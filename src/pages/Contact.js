import React from "react";
import { Icon } from "../components/Icons";

export default function Contact() {
  return (
    <div className="contact">
      <a href="https://www.instagram.com/zeraphosa/" className="contact-item" target="_blank" rel="noreferrer">
        <Icon name={"instagram"} size={20} />
      </a>
      <a href="https://www.linkedin.com/in/zaursharifov-404/" className="contact-item" target="_blank" rel="noreferrer">
        <Icon name={"linkedin"} size={20} />
      </a>
      <a href="https://github.com/zeraphosa" className="contact-item" target="_blank" rel="noreferrer">
        <Icon name={"github"} size={21} />
      </a>
      <a href="https://open.spotify.com/user/31pqny7qxt3h7yhw3nazyyjuzjr4?si=c8383f65df324cbc" className="contact-item" target="_blank" rel="noreferrer">
        <Icon name={"spotify"} size={20} />
      </a>
      <a href="mailto:zaur.sharifov@outlook.com" className="contact-item">
        <Icon name={"mail"} size={21} />
      </a>
      <a href="https://wa.me/+994705741452" className="contact-item" target="_blank" rel="noreferrer">
        <Icon name={"whatsapp"} size={20} />
      </a>
      <a href="https://t.me/zeraphosa" className="contact-item" target="_blank" rel="noreferrer">
        <Icon name={"telegram"} size={20} />
      </a>
    </div>
  );
}
