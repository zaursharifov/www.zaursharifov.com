import React, { useState, useRef } from "react";
import Header from "../components/Header";
import data from "../projects";
import "../style/projects.css";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Works() {
  const visible = true;
  const [selected, set_selected] = useState("all");
  const [arr, set_arr] = useState(data);
  const items = [...new Set(data.map((val) => val.c))];
  const sliderRef = useRef();

  const [hover, setHover] = useState(false);

  function filterItem(curcat) {
    const newItem = data.filter((newVal) => {
      return newVal.c === curcat;
    });
    set_arr(newItem);
    set_selected(curcat);
  }

  return (
    <div className={`works ${visible && "visible"}`}>
      <Header />
      <div className="works_header">
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
      <div className="works_slider">
        <ScrollContainer className="slider_inner" innerRef={sliderRef}>
          {arr.map((item, index) => {
            return (
              <div key={index} className={`w_item ${hover && "imghover"}`}>
                <div
                  onMouseEnter={() => setHover(false)}
                  onDoubleClick={() => {
                    if (item.g !== null) {
                      window.open(item.g);
                    } else window.alert("Github page not found! \nPrivate Project");
                  }}
                  className={`w_image`}
                  style={{ backgroundImage: `url(${item.i})` }}
                />
                <button
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => {
                    if (item.l !== null) {
                      window.open(item.l);
                    } else window.alert("Live version not found!");
                  }}
                  className="w_btns"
                >
                  <h2>{item.a}</h2>
                  <p>→</p>
                </button>
              </div>
            );
          })}
        </ScrollContainer>
      </div>
    </div>
  );
}
