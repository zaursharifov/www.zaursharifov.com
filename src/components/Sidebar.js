import ButtonGroup from "../page_components/ButtonGroup";
import "../style/sidebar.scss";

export default function Sidebar() {
  return (
    <div className="cover">
      <div className="sidebar">
        <span className="line"></span>
        <ButtonGroup
          buttons={["Home", "Works", "About", "Galery", "Contact"]}
          numbers={["01", "02", "03", "04", "05"]}
          doSomething={console.log("SASA")}
        />
      </div>
    </div>
  );
}
