import React, { useState } from "react";
import "../style/sidebar.css";

export default function Sidebar({ changeComponent, component }) {
  return (
    <div className="sidebar">
      <ButtonGroup buttons={["Home", "Works", "About", "Contact"]} doSomething={changeComponent} component={component} />
    </div>
  );
}

function ButtonGroup({ buttons, doSomething }) {
  const [clickedId, setClickedId] = useState(0);

  function handleClick(event, id) {
    setClickedId(id);
    doSomething(event);
  }

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button key={i} name={buttonLabel} onClick={(event) => handleClick(event, i)} className={"btn"}>
          {i !== clickedId ? (
            <span className="num">{i}</span>
          ) : (
            <>
              <span className="dot">•</span>
              <p className="menu_p">{buttonLabel}</p>
            </>
          )}
        </button>
      ))}
    </>
  );
}
