import React, { useState, useRef, useEffect } from "react";
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
  const [lastHoveredElement1, setLastHoveredElement1] = useState(null);
  const [lastHoveredElement2, setLastHoveredElement2] = useState(null);
  // function handleHover(index, isHovering) {
  //   const newHoverStates = [...arr];
  //   newHoverStates[index] = isHovering;
  //   set_arr(newHoverStates);
  // }
  const handleHover = (index) => {
    if (lastHoveredElement1 === null) {
      setLastHoveredElement1(index);
    } else if (lastHoveredElement2 === null) {
      setLastHoveredElement2(index);
    } else {
      setLastHoveredElement1(lastHoveredElement2);
      setLastHoveredElement2(index);
    }
  };
  useEffect(() => {
    const slider = sliderRef.current;
    function handleScroll() {
      const sliderRect = slider.getBoundingClientRect();
      const elements = slider.querySelectorAll(".w_item");
      const visibleElements = [];
      elements.forEach((element, index) => {
        const elementRect = element.getBoundingClientRect();
        if ((elementRect.left >= sliderRect.left && elementRect.left <= sliderRect.right) || (elementRect.right >= sliderRect.left && elementRect.right <= sliderRect.right)) {
          visibleElements.push(index);
        }
      });
      // set_arr(data);
      setLastHoveredElement1(null);
      setLastHoveredElement2(null);
      // visibleElements.forEach((index) => {
      //   handleHover(index, true);
      // });
      visibleElements.forEach(index => {
        handleHover(index);
      });
    }
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [handleHover]);

  // const elements = arr.map((_, index) => `Element ${index + 1}`);

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

      {/* {<div className="ix">{arr.map((ar, index) => ar && <p key={index}>{index + 1}</p>)}</div>} */}
      {lastHoveredElement1 !== null && <p>Hovering over element {lastHoveredElement1}</p>}
      {console.log(lastHoveredElement1)}
      {/* {lastHoveredElement2 !== null && <p>Hovering over element {lastHoveredElement2 + 1}</p>} */}
      <div className={`works_slider `} ref={sliderRef}>
        <ScrollContainer className="slider_inner">
          {arr.map((item, index) => {
            return (
              <div key={index} className={`w_item ${hover && "imghover"}`} onMouseEnter={() => handleHover(index, true)} onMouseLeave={() => handleHover(index, false)}>
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

// const [globalMousePos, setGlobalMousePos] = useState({});
// const [localMousePos, setLocalMousePos] = useState({});

// function handleMouseMove(e) {
//   const localX = e.clientX - e.target.offsetLeft;
//   const localY = e.clientY - e.target.offsetTop;
//   setLocalMousePos({ x: localX, y: localY });
// }

// useEffect(() => {
//   function handleMouseMove(e) {
//     setGlobalMousePos({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   }
//   window.addEventListener("mousemove", handleMouseMove);
//   return () => {
//     window.removeEventListener("mousemove", handleMouseMove);
//   };
// }, []);

// console.log("LOCAL:", localMousePos);
// console.log("GLOBAL:", globalMousePos);
