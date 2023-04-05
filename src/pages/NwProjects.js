import { Icon } from "../components/Icons";

export default function NwProjects() {
  return (
    <>
      <h2>Other Noteworthy Projects</h2>
      <div className="nwprojects">
        <div className="nwp-item">
          <h3>
            <a className="nwp-header" href="/" target="_blank" rel="noreferrer">
              Playground
            </a>
          </h3>
          <div className="nwp-info">
            <div className="nwp-tech">
              <p>Html</p>
              <p>Css</p>
              <p>React Js</p>
            </div>
            <div className="project-links">
              <a href={"/"} target="_blank" rel="noreferrer">
                <Icon name="github" size={23} />
              </a>
              <a href={"/"} target="_blank" rel="noreferrer">
                <Icon name="link" size={23} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
