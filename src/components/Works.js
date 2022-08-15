import React, { useState } from "react";
import "../style/works.css";
import data from "../works";

export default function Works() {
  const [arr, set_arr] = useState(data);
  const items = [...new Set(data.map((val) => val.c))];

  function filterItem(curcat) {
    const newItem = data.filter((newVal) => {
      return newVal.c === curcat;
    });
    set_arr(newItem);
  }
  return (
    <div className="works">
      <div className="works_header">
        <button onClick={() => set_arr(data)}>All</button>
        {items.map((val, id) => {
          return (
            <button
              key={id}
              onClick={(e) => {
                filterItem(val);
              }}
            >
              {val}
            </button>
          );
        })}
      </div>
      <div className="works_slider">
        <div className="slider_inner">
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
                <div className="w_btns">
                  <h2>{item.a}</h2>
                  <a href={item.l}>→</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
