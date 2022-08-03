import ButtonGroup from "../page_components/ButtonGroup";
import "../style/sidebar.scss";

export default function Sidebar() {
  function tt(event) {
    console.log(event.target.name);
  }
  return (
    <div className="cover">
      <div className="sidebar">
        <span className="line"></span>
        <ButtonGroup
          buttons={["Home", "Works", "About", "Galery", "Contact"]}
          doSomething={tt}
        />
      </div>
    </div>
  );
}
