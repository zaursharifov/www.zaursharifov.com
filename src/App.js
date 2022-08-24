import React, { useState, useEffect } from "react";
import Navbar from "./page_components/Navbar";
import Sidebar from "./page_components/Sidebar";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./page_components/Loader";
import "./style/app.css";
import Mobile from "./components/Mobile";

export default function App() {
  const [loading, set_loading] = useState(true);
  const [component, set_component] = useState("Home");
  const [mobile, set_mobile] = useState(false);
  const visible = true;

  function changeComponent(event) {
    set_component(event.target.name);
  }

  useEffect(() => {
    setTimeout(() => set_loading(false), 1000);
    if (window.innerWidth <= 912 && window.innerHeight <= 1000) {
      set_mobile(true);
    }
  }, []);

  return (
    <>
      {mobile ? (
        <Mobile />
      ) : loading === false ? (
        <div className="container">
          <Navbar />
          <Sidebar changeComponent={changeComponent} component={component} />
          <div className={`content ${visible ? "visible" : null}`}>
            {component === "Home" ? <Home set_component={set_component} /> : ""}
          </div>
          <div className="content">
            {component === "Works" ? <Works /> : ""}
          </div>
          <div className="content">
            {component === "About" ? <About /> : ""}
          </div>
          <div className="content">
            {component === "Contact" ? <Contact /> : ""}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
