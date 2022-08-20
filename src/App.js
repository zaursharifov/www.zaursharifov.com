import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./page_components/Navbar";
import Sidebar from "./page_components/Sidebar";
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
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {component === "Home" ? <Home set_component={set_component} /> : ""}
          </motion.div>
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {component === "Works" ? <Works /> : ""}
          </motion.div>
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {component === "About" ? <About /> : ""}
          </motion.div>
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {component === "Contact" ? <Contact /> : ""}
          </motion.div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
