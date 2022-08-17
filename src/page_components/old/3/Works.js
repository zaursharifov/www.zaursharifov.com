import React, { useState } from "react";
import "../style/works.css";
import data from "../works";
import Carousel from "react-simply-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Works() {
  const [selected, set_selected] = useState("all");
  const [arr, set_arr] = useState(data);
  const items = [...new Set(data.map((val) => val.c))];
  const [activeSlide, setActiveSlide] = useState(0);
  function filterItem(curcat) {
    const newItem = data.filter((newVal) => {
      return newVal.c === curcat;
    });
    set_arr(newItem);
    set_selected(curcat);
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
        <Carousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "space-evenly",
              userSelect: "text",
            },
          }}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: <ArrowForwardIosIcon />,
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
            },
          }}
          backwardBtnProps={{
            children: <ArrowBackIosIcon />,
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
            },
          }}
          itemsToShow={1}
          speed={500}
        >
          {arr.map((item, index) => {
            return (
              <div className="w_item" key={index}>
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
        </Carousel>
      </div>
    </div>
  );
}
