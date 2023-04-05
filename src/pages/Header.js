import Contact from "../components/Contact";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-info">
          <h4 className="header-text">Jr. Full Stack Developer</h4>
          <a className="resume-btn" href="./assets/cv-zaursharifov.pdf" target={"_blank"}>
            RESUME →
          </a>
        </div>
        <Contact />
      </div>
      <div className="line"></div>
    </div>
  );
}
