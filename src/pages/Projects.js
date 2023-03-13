import React, { useState, useRef } from "react";
import { Icon } from "../components/Icons";
import ScrollContainer from "react-indiana-drag-scroll";
import Header from "../components/Header";
import data from "../projects";

export default function Works() {
  const visible = true;
  const [hover, setHover] = useState(false);
  const [selected, set_selected] = useState("all");
  const [arr, set_arr] = useState(data);
  const items = [...new Set(data.map((val) => val.c))];
  const sliderRef = useRef();
  const scrollContainerRef = useRef();
  const [leftElement, setLeftElement] = useState(false);
  const [rightElement, setRightElement] = useState(false);

  function filterItem(curcat) {
    const newItem = data.filter((newVal) => {
      return newVal.c === curcat;
    });
    set_arr(newItem);
    set_selected(curcat);
  }

  function handleMouseMove(event) {
    const { clientX } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    if (clientX >= rect.left && clientX <= rect.left + halfWidth) {
      setLeftElement(true);
      setRightElement(false);
    } else if (clientX > rect.left + halfWidth && clientX <= rect.right) {
      setLeftElement(false);
      setRightElement(true);
    } else {
      setLeftElement(false);
      setRightElement(false);
    }
  }

  function handleMouseLeave() {
    setLeftElement(false);
    setRightElement(false);
  }

  function slideNext() {
    scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth - 300;
  }

  function slidePrev() {
    scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.offsetWidth - 300;
  }

  function handleArrows() {
    if (leftElement) slidePrev();
    else if (rightElement) slideNext();
  }

  return (
    <div className={`projects ${visible && "visible"}`}>
      <Header />
      <div className="projects-header">
        <button
          onClick={() => {
            set_arr(data);
            set_selected("all");
          }}
          className={selected === "all" ? "active" : ""}
        >
          All
        </button>
        {items.map((val, id) => {
          return (
            <button
              key={id}
              className={selected === val ? "active" : ""}
              onClick={() => {
                filterItem(val);
              }}
            >
              {val}
            </button>
          );
        })}
      </div>

      <div className={`projects-slider ${leftElement && "slide-left"} ${rightElement && "slide-right"}`} ref={sliderRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <ScrollContainer className="slider-inner" innerRef={scrollContainerRef} onClick={handleArrows}>
          {arr.map((item, index) => {
            return (
              <div key={index} className={`projects-item ${hover && "project-hover"}`}>
                <div className="project-img" onMouseEnter={() => setHover(false)} style={{ backgroundImage: `url(${item.i})` }} />
                <div className="project-link" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                  <h2>{item.a}</h2>
                  <div>
                    <button
                      target={"_blank"}
                      onClick={() => {
                        if (item.g !== null) {
                          window.open(item.g);
                        } else window.alert("Private Project");
                      }}
                    >
                      <Icon name={"github"} size={20} />
                    </button>
                    <button
                      target={"_blank"}
                      onClick={() => {
                        if (item.l !== null) {
                          window.open(item.l);
                        } else window.alert("Live version not found!");
                      }}
                    >
                      <Icon name={"link"} size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollContainer>
      </div>
    </div>
  );
}
