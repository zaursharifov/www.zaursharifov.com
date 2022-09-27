import React, { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "../style/works.css";
import data from "../works";

export default function Works() {
  const [selected, set_selected] = useState("all");
  const [arr, set_arr] = useState(data);
  const items = [...new Set(data.map((val) => val.c))];

  const sliderRef = useRef();
  const [prev, set_prev] = useState(false);
  const [next, set_next] = useState(false);

  function filterItem(curcat) {
    const newItem = data.filter((newVal) => {
      return newVal.c === curcat;
    });
    set_arr(newItem);
    set_selected(curcat);
  }

  function slideNext() {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth - 300;
  }
  function slidePrev() {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth - 300;
  }

  useEffect(() => {
    if (sliderRef.current) {
      function scrollHandle() {
        const isEnd = sliderRef.current.scrollLeft + sliderRef.current.offsetWidth === sliderRef.current.scrollWidth;
        const isBegin = sliderRef.current.scrollLeft === 0;
        set_prev(!isBegin);
        set_next(!isEnd);
      }
      scrollHandle();
      sliderRef.current.addEventListener("scroll", scrollHandle);
      return () => {
        sliderRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [sliderRef]);

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
        {prev && (
          <button className="slide_btn_1" onClick={slidePrev}>
            <img src="./prev.png" alt="prev" />
          </button>
        )}
        {next && (
          <button className="slide_btn_2" onClick={slideNext}>
            <img src="./next.png" alt="next" />
          </button>
        )}
        <ScrollContainer className="slider_inner" innerRef={sliderRef}>
          {arr.map((item, index) => {
            return (
              <div key={index} className="w_item">
                <div
                  onDoubleClick={() => {
                    if (item.g !== null) {
                      window.open(item.g);
                    } else window.alert("Github page not found! \nPrivate Project");
                  }}
                  className="w_image"
                  style={{ backgroundImage: `url(${item.i})` }}
                />
                <button
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
