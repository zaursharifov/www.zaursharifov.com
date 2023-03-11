import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import "../style/contact.css";

export default function Contact({ focusInput, setFocusInput }) {
  const visible = true;
  const inputRef = useRef();

  useEffect(()=>{
    function handleFocus(){
      setFocusInput(true);
    }

    inputRef.current.addEventListener('onfocus',handleFocus);
    return()=>{
      inputRef.current.removeEventListener('onfocus',handleFocus);
    }
  },[])

  return (
    <>
      <Header />
      <div className={`contact ${visible && "visible"}`}>
        <div className="image">
          <img className="pin" src="./about/maps/circle.png" alt="pin" />
        </div>
        <div className="card" id="mail">
          <input type="text" placeholder="name" ref={inputRef} />
          <span class="textarea" role="textbox" contenteditable="true"></span>
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
