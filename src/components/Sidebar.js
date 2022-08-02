import "../style/sidebar.scss";
export default function Sidebar() {
  return (
    <div className="cover">
      <div className="sidebar">
        <span className="line"></span>
        <h3 className="btn">
          <span className="num">01</span>Home
        </h3>
        <h3 className="btn">
          <span className="num">02</span>About
        </h3>
        <h3 className="btn">
          <span className="num">03</span>Projects
        </h3>
        <h3 className="btn">
          <span className="num">04</span>Galery
        </h3>
        <h3 className="btn">
          <span className="num">05</span>Contact
        </h3>
        <h3 className="btn">
          <span className="num">06</span>Hire
        </h3>
      </div>
    </div>
  );
}
