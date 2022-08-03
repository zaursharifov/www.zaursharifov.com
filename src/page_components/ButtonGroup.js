import { useState } from "react";
import "../style/sidebar.scss";

export default function ButtonGroup({ buttons, doSomething }) {
  const [clickedId, set_clickedId] = useState(0);

  function handleClick(event, id) {
    set_clickedId(id);
    doSomething(event);
  }
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={"btn"}
        >
          {i === clickedId ? (
            <>
              <span className="dot">•</span>
              {buttonLabel}
            </>
          ) : (
            <span className="num">{i}</span>
          )}
        </button>
      ))}
    </>
  );
}
