import React, { useRef, useState } from "react";
import "../style/works.css";
import data from "../works";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Works() {
  const [selected, set_selected] = useState("all");
  const [arr, set_arr] = useState(data);
  const items = [...new Set(data.map((val) => val.c))];
  const scrollRef = useRef();
  const el = scrollRef.current;

  function filterItem(curcat) {
    const newItem = data.filter((newVal) => {
      return newVal.c === curcat;
    });
    set_arr(newItem);
    set_selected(curcat);
    el.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }

  function leftHandle() {
    el.scrollTo({
      left: el.scrollLeft - 400,
      behavior: "smooth",
    });
  }
  function rightHandle() {
    el.scrollTo({
      left: el.scrollLeft + 400,
      behavior: "smooth",
    });
  }

  return (
    <div className="works">
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
        <button className="arrow_btn" onClick={leftHandle}>
          <ArrowBackIosIcon />
        </button>
        <div className="slider_inner" ref={scrollRef}>
          {arr.map((item, index) => {
            return (
              <div key={index} className="w_item">
                <div
                  onDoubleClick={() => {
                    window.open(`${item.g}`);
                  }}
                  className="w_image"
                  style={{ backgroundImage: `url(${item.i})` }}
                />
                <button
                  onClick={() => {
                    window.open(item.l);
                  }}
                  className="w_btns"
                >
                  <h2>{item.a}</h2>
                  <p>→</p>
                </button>
              </div>
            );
          })}
        </div>
        <button className="arrow_btn" onClick={rightHandle}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}
