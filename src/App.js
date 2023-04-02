import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="font-montserrat bg-bgColor text-textColor0">
      <div className="max-w-screen-md m-auto min-h-screen pb-5">
        <div className="h-10 w-full flex justify-center items-center mb-5 sticky">
          <h1 className="uppercase tracking-widest font-bold text-lg">Zaur Sharifov</h1>
        </div>
        <div className="md:flex md:flex-row flex-col px-10">
          <div className="md:w-3/4 w-full border-b-2 md:border-r-2 md:border-b-0  border-lineColor flex flex-col gap-3 mb-5 md:mr-5 pb-2">
            <div className="group hover:cursor-pointer">
              <h2 className="uppercase font-medium">Front End Development</h2>
              <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">HTML5 / Css / Javascript / React JS / Bootstrap / TailwindCss</p>
            </div>
            <div className="group hover:cursor-pointer">
              <h2 className="uppercase font-medium">Back End Development</h2>
              <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">Node js / Mongo Db / MySql</p>
            </div>
            <div className="group hover:cursor-pointer">
              <h2 className="uppercase font-medium">Mobile Development</h2>
              <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">React Native</p>
            </div>
          </div>
          <div className="md:w-3/4 w-full">
            <p>links</p>
          </div>
        </div>
      </div>
    </div>
  );
}
