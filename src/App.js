import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cursor from "./page_components/Cursor";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Galery from "./components/Galery";
import Contact from "./components/Contact";
import "./style/app.css";

export default function App() {
  const [component, set_component] = useState("Home");

  function changeComponent(event) {
    set_component(event.target.name);
  }

  return (
    <>
      <Cursor changeComponent={changeComponent} />

      <div className="container">
        <Navbar />
        <Sidebar changeComponent={changeComponent} />

        <div className="content">{component === "Home" ? <Home /> : ""}</div>
        <div className="content">{component === "Works" ? <Works /> : ""}</div>
        <div className="content">{component === "About" ? <About /> : ""}</div>
        <div className="content">
          {component === "Galery" ? <Galery /> : ""}
        </div>
        <div className="content" style={{zIndex: "-1"}}>
          {component === "Contact" ? <Contact /> : ""}
        </div>
      </div>
    </>
  );
}
