import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [width, set_width] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    set_width(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [arr]);
  return (
    <div className="works">
      <div className="works_header">
        <button onClick={() => set_arr(data)}>All</button>
        {items.map((val, id) => {
          return (
            <button key={id} onClick={() => filterItem(val)}>
              {val}
            </button>
          );
        })}
      </div>
      <div className="works_slider">
        <motion.div
          ref={carousel}
          className="w_carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="w_carousel_inner"
          >
            {arr.map((item, index) => {
              return (
                <motion.div key={index} className="w_item">
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
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
