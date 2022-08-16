import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./page_components/Loader";
import "./style/app.css";

export default function App() {
  const [loading, set_loading] = useState(true);
  const [component, set_component] = useState("Home");

  function changeComponent(event) {
    set_component(event.target.name);
  }

  useEffect(() => {
    setTimeout(() => set_loading(false), 1000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="container">
          <Navbar />
          <Sidebar changeComponent={changeComponent} component={component} />

          <div className="content">
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
