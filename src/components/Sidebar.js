import React from "react";
import ButtonGroup from "../page_components/ButtonGroup";
import "../style/sidebar.css";

export default function Sidebar({ changeComponent, component }) {
  return (
    <div className="cover">
      <div className="sidebar">
        <span className="s_line"></span>
        <ButtonGroup
          buttons={["Home", "Works", "About", "Galery", "Contact"]}
          doSomething={changeComponent}
          component={component}
        />
      </div>
    </div>
  );
}
