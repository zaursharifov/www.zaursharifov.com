import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../images";
import "../style/works.css";

export default function Works() {
  const [width, set_width] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    set_width(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="works">
      <div className="works_header"></div>
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
            {images.map((item, index) => {
              return (
                <motion.div key={index} className="w_item">
                  <div
                    className="w_image"
                    style={{ backgroundImage: `url(${item.i})` }}
                  />
                  <div className="w_btns">
                    <a href={item.l}>Live →</a>
                    <a href={item.g}>Github →</a>
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
