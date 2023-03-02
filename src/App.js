import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-header">
          <a className="logo" href="/">
            ZAUR SHARIFOV
          </a>
        </div>
        <Sidebar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <SliderHandle />
      </div>
    </BrowserRouter>
  );
}

function SliderHandle() {
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    const routes = ["/", "/projects", "/about", "/contact"];

    function handleScroll() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const maxScrollPosition = document.documentElement.offsetHeight;

      if (scrollPosition >= maxScrollPosition) {
        const currentIndex = routes.indexOf(currentRoute);
        const nextIndex = currentIndex === routes.length - 1 ? 0 : currentIndex + 1;
        const nextRoute = routes[nextIndex];
        setCurrentRoute(nextRoute);
        navigate(nextRoute);
        // window.history.pushState(nextRoute);
      }

      if (window.scrollY === 0) {
        const currentIndex = routes.indexOf(currentRoute);
        const prevIndex = currentIndex === 0 ? routes.length - 1 : currentIndex - 1;
        const prevRoute = routes[prevIndex];
        setCurrentRoute(prevRoute);
        navigate(prevRoute);
        // window.history.pushState(prevRoute);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentRoute, navigate]);

  return null;
}
