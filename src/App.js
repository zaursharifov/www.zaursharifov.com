import React from "react";
import { Icon } from "./components/Icons";
import "./index.css";

export default function App() {
  return (
    <div className="font-montserrat bg-bgColor text-textColor0">
      <div className="max-w-screen-md m-auto min-h-screen pb-5">
        <div className="h-10 w-full flex justify-center items-center mb-5 sticky">
          <h1 className="uppercase tracking-widest font-bold text-lg">Zaur Sharifov</h1>
        </div>
        <div className="md:flex md:flex-row flex-col px-10 md:h-auto h-96 ">
          <div className="md:w-2/4 w-full border-b-2 md:border-r-2 md:border-b-0  border-lineColor flex flex-col gap-3 md:mb-0 mb-5 md:mr-5 pb-2">
            <div className="group hover:cursor-pointer">
              <h2 className="uppercase">Front End Development</h2>
              <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">HTML5 / Css / Javascript / React JS / Bootstrap / TailwindCss</p>
            </div>
            <div className="group hover:cursor-pointer">
              <h2 className="uppercase">Back End Development</h2>
              <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">Node js / Mongo Db / MySql</p>
            </div>
            <div className="group hover:cursor-pointer">
              <h2 className="uppercase">Mobile Development</h2>
              <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">React Native</p>
            </div>
          </div>
          <div className="md:w-3/4 h-48 flex justify-center items-center">
            <div className="h-3/4 w-2/5 border-2">
            <a href="https://www.linkedin.com/in/zaursharifov-404/" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"linkedin"} size={34} />
            </a>
            <a href="https://github.com/zeraphosa" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"github"} size={34} />
            </a>
            <a href="https://www.instagram.com/zeraphosa/" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"instagram"} size={34} />
            </a>
            <a href="https://open.spotify.com/user/31pqny7qxt3h7yhw3nazyyjuzjr4?si=c8383f65df324cbc" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"spotify"} size={34} />
            </a>
            <a href="https://wa.me/+994705741452" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"whatsapp"} size={34} />
            </a>
            <a href="https://t.me/zeraphosa" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"telegram"} size={34} />
            </a>
            <a href="https://twitter.com/zaursharifov404" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"twitter"} size={34} />
            </a>
            <a href="mailto:zaur.sharifov@outlook.com" className="icon-btn">
              <Icon name={"mail"} size={34} />
            </a>
            <a href="https://discordapp.com/users/1031209551405527150" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"discord"} size={34} />
            </a>
            <a href="https://codepen.io/zaursharifov" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"codepen"} size={34} />
            </a>
            <a href="https://www.upwork.com/freelancers/~012630e0eabc4b2682" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"upwork"} size={34} />
            </a>
            <a href="https://steamcommunity.com/id/zeolone404/" className="icon-btn" target="_blank" rel="noreferrer">
              <Icon name={"steam"} size={34} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
