import { Icon } from "../components/Icons";

export default function Contact() {
  return (
    <div className="md:flex md:flex-row flex-col px-10 md:h-auto h-96">
      <div className="md:w-2/4 w-full border-b-2 md:border-r-2 md:border-b-0  border-lineColor flex flex-col gap-3 md:mb-0 mb-5 md:mr-5 pb-2 my-auto">
        <div className="group hover:cursor-pointer">
          <h3 className="uppercase text-sm">Front End Development</h3>
          <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">HTML5 / Css / Javascript / React JS / Bootstrap / TailwindCss</p>
        </div>
        <div className="group hover:cursor-pointer">
          <h3 className="uppercase text-sm">Back End Development</h3>
          <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">Node js / Mongo Db / MySql</p>
        </div>
        <div className="group hover:cursor-pointer">
          <h3 className="uppercase text-sm">Mobile Development</h3>
          <p className="text-lineColor text-sm group-hover:text-textColor0 transition-all ease-in-out duration-150">React Native</p>
        </div>
      </div>
      <div className="md:w-3/4 h-48 flex justify-center items-center">
        <div className="h-auto w-2/4 grid grid-cols-4 content-center place-items-center md:gap-2 gap-16">
          <a href="https://www.linkedin.com/in/zaursharifov-404/" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"linkedin"} size={32} />
          </a>
          <a href="https://github.com/zeraphosa" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"github"} size={32} />
          </a>
          <a href="https://www.instagram.com/zeraphosa/" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"instagram"} size={32} />
          </a>
          <a href="https://open.spotify.com/user/31pqny7qxt3h7yhw3nazyyjuzjr4?si=c8383f65df324cbc" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"spotify"} size={32} />
          </a>
          <a href="https://wa.me/+994705741452" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"whatsapp"} size={32} />
          </a>
          <a href="https://t.me/zeraphosa" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"telegram"} size={32} />
          </a>
          <a href="https://twitter.com/zaursharifov404" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"twitter"} size={32} />
          </a>
          <a href="mailto:zaur.sharifov@outlook.com" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150">
            <Icon name={"mail"} size={32} />
          </a>
          <a href="https://discordapp.com/users/1031209551405527150" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"discord"} size={32} />
          </a>
          <a href="https://codepen.io/zaursharifov" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"codepen"} size={32} />
          </a>
          <a href="https://www.upwork.com/freelancers/~012630e0eabc4b2682" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"upwork"} size={32} />
          </a>
          <a href="https://steamcommunity.com/id/zeolone404/" className="bg-textColor1 p-1 hover:scale-105 hover:bg-blue transition-all ease-in-out duration-150" target="_blank" rel="noreferrer">
            <Icon name={"steam"} size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
