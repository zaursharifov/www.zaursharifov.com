import React, { useEffect, useState } from "react";
import "../style/sidebar.css";

export default function ButtonGroup({ buttons, doSomething, component }) {
  const [clickedId, set_clickedId] = useState(0);

  function handleClick(event, id) {
    set_clickedId(id);
    doSomething(event);
  }
  useEffect(() => {
    if (component === "Contact") {
      set_clickedId(4);
    }
  }, [component]);

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={"btn"}
        >
          {i !== clickedId ? (
            <span className="num">{i}</span>
          ) : (
            <>
              <span className="dot">•</span>
              {buttonLabel}
            </>
          )}
        </button>
      ))}
    </>
  );
}
