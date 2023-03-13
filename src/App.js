import React, { useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pages = [<Home />, <Projects />, <Contact />];

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
    <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex}>
      <div className="app-container">
        <Sidebar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        {pages[currentIndex]}
      </div>
    </ReactScrollWheelHandler>
  );
}
