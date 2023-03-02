import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./style/app.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pages = [<Home />, <Projects />, <About />, <Contact />];

  function nextIndex() {
    if (currentIndex === pages.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  function prevIndex() {
    if (currentIndex === 0) {
      return setCurrentIndex(pages.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className="app-container">
      <Sidebar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex}>
        {pages[currentIndex]}
      </ReactScrollWheelHandler>
    </div>
  );
}
