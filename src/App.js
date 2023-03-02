import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./style/app.css";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="scroll-container">
        <section>
          <Home section="home" />
        </section>
        <section>
          <Projects section="projects" />
        </section>
        <section>
          <About section="about" />
        </section>
        <section>
          <Contact section="contact" />
        </section>
      </main>
    </div>
  );
}
