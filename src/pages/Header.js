import Contact from "./Contact";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <a className="resume-btn" href="./assets/cv-zaursharifov.pdf" target={"_blank"}>
          RESUME →
        </a>
        <Contact />
      </div>
      <div className="line"></div>
      <div className="about">
        <div className="about-item">
          <h2>Front end development</h2>
          <p>HTML5 / CSS / Javascript / React JS</p>
        </div>
        <div className="about-item">
          <h2>Back end development</h2>
          <p>Node js / Mongo DB / MySql</p>
        </div>
        <div className="about-item">
          <h2>Mobile development</h2>
          <p>React Native</p>
        </div>
      </div>
    </div>
  );
}
