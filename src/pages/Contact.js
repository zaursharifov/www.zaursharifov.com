import React, { useRef } from "react";
import Header from "../components/Header";
import "../style/contact.css";

export default function Contact({ setFocusInput }) {
  const visible = true;
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  function handleSend() {
    let data = {
      name: nameRef.current.innerHTML,
      email: emailRef.current.innerHTML,
      text: textRef.current.innerHTML,
    };
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText === "success") {
        alert("email sent");
        nameRef.current.innerHTML = "";
        emailRef.current.innerHTML = "";
        textRef.current.innerHTML = "";
      } else {
        alert("something wrong");
      }
    };
    xhr.send(JSON.stringify(data));
  }

  return (
    <>
      <Header />
      <div className={`contact ${visible && "visible"}`}>
        <div className="image">
          <img className="pin" src="./about/maps/circle.png" alt="pin" />
        </div>
        <div className="card" id="mail">
          <input ref={nameRef} type="text" placeholder="name" onFocus={() => setFocusInput(true)} onMouseLeave={() => setFocusInput(false)} />
          <input ref={emailRef} type="email" placeholder="email" onFocus={() => setFocusInput(true)} onMouseLeave={() => setFocusInput(false)} />
          <span ref={textRef} class="textarea" role="textbox" contenteditable="true" onFocus={() => setFocusInput(true)} onMouseLeave={() => setFocusInput(false)} />
          <div>
            <button type="submit" className="a_btn" onClick={handleSend}>
              SEND <span className="span">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
