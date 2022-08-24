import "../style/mobile.css";
import Works from "./Works";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../page_components/Navbar";

export default function Mobile() {
  return (
    <div className="m_container">
      <div className="m_navbar">
        <Navbar />
      </div>
      <div className="m_home">
        <h1 className="mh_h1">Creative websites for your brand</h1>
        <button
          className="h_btn"
          onClick={(e) => {
            window.location.href = "#contact";
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          CONTACT ME →
        </button>
        <div className="h_line"></div>
        <div className="b_section">
          <h2>Front end development</h2>
          <p>HTML5 / CSS / Javascript / React JS</p>
        </div>
        <div className="b_section">
          <h2>Back end development</h2>
          <p>Node js / Mongo DB / MySql</p>
        </div>
        <div className="b_section">
          <h2>Mobile development</h2>
          <p>React Native</p>
        </div>
      </div>
      <div className="m_works">
        <Works />
      </div>
      <div className="m_about">
        <span className="m_circle"></span>
        <span className="m_triangle"></span>
        <span className="m_square"></span>
        <span className="m_square2"></span>
        <h1 className="ma_h1">Jr. Full Stack Developer</h1>
        <a
          href="./about/cv_zaursharifov.pdf"
          target={"_blank"}
          className="a_btn"
        >
          RESUME <span className="span">→</span>
        </a>
      </div>
      <div className="m_contact" id="contact">
        <div className="m_card">
          <div className="c_txt_container">
            <button className="c_txt">
              <a
                className="c_txt"
                href="mailto:zaur.sharifov@outlook.com"
                rel="noreferrer"
              >
                zaur.sharifov@outlook.com
              </a>
            </button>
            <button
              className="c_txt"
              onClick={() => {
                window.open("https://wa.me/+994705741452");
              }}
            >
              +994 70 574 14 52
            </button>
            <button
              className="c_txt"
              onClick={() => {
                window.open("https://wa.me/+905536441452");
              }}
            >
              +905 53 644 14 52
            </button>
          </div>

          <div className="c_btn_container">
            <button
              className="c_btn"
              onClick={() => {
                window.open("https://www.instagram.com/zeraphosa/");
              }}
            >
              <InstagramIcon />
            </button>
            <button
              className="c_btn"
              onClick={() => {
                window.open("https://www.linkedin.com/in/zaursharifov-404/");
              }}
            >
              <LinkedInIcon />
            </button>
            <button
              className="c_btn"
              onClick={() => {
                window.open("https://github.com/zeraphosa");
              }}
            >
              <GitHubIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
