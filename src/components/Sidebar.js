import { useState } from "react";
import "../style/sidebar.scss";
export default function Sidebar() {
  const [isActive] = useState(true);

  return (
    <div className="cover">
      <div className="sidebar">
        <span className="line"></span>
        <div className="btn_container">
          {isActive ? (
            <>
              <span className="num">01</span>
              <span className="dot">•</span>
              <a href="/" className="btn">
                Home
              </a>
            </>
          ) : (
            <>
              <a href="/" className="num_reverse">
                01
              </a>
            </>
          )}
        </div>
        <div className="btn_container">
          {!isActive ? (
            <>
              <span className="num">02</span>
              <span className="dot">•</span>
              <a href="/" className="btn">
                Works
              </a>
            </>
          ) : (
            <>
              <a href="/" className="num_reverse">
                02
              </a>
            </>
          )}
        </div>

        <div className="btn_container">
          {!isActive ? (
            <>
              <span className="num">03</span>
              <span className="dot">•</span>
              <a href="/" className="btn">
                About
              </a>
            </>
          ) : (
            <>
              <a href="/" className="num_reverse">
                03
              </a>
            </>
          )}
        </div>

        <div className="btn_container">
          {!isActive ? (
            <>
              <span className="num">04</span>
              <span className="dot">•</span>
              <a href="/" className="btn">
                Galery
              </a>
            </>
          ) : (
            <>
              <a href="/" className="num_reverse">
                04
              </a>
            </>
          )}
        </div>

        <div className="btn_container">
          {!isActive ? (
            <>
              <span className="num">05</span>
              <span className="dot">•</span>
              <a href="/" className="btn">
                Contact
              </a>
            </>
          ) : (
            <>
              <a href="/" className="num_reverse">
                05
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
