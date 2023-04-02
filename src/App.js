import React from "react";
import Contact from "./pages/Contact";
import "./index.css";

export default function App() {
  return (
    <div className="font-montserrat bg-bgColor text-textColor0">
      <div className="max-w-screen-md m-auto min-h-screen pb-5">
        <div className="h-10 w-full flex justify-center items-center mb-5 sticky">
          <h1 className="uppercase tracking-widest font-bold text-lg">Zaur Sharifov</h1>
        </div>
        <div className="border-t-2 border-b-2 flex justify-between gap-3 px-10 py-1 mb-5 flex-wrap">
          <h2 className="text-lg">Jr. Full Stack Developer</h2>
          <button className="text-md group">Resume <span className="group-hover:text-blue transition-all ease-in-out duration-150">→</span></button>
        </div>
        <Contact />
      </div>
    </div>
  );
}
