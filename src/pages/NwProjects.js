import { Icon } from "../components/Icons";
import data from "../utilities/nwprojects";

export default function NwProjects() {
  return (
    <>
      <h2>Other Noteworthy Projects</h2>
      <div className="nwprojects">
        {data.map((item, id) => (
          <div key={id} className="nwp-item">
            <h4>
              <a className="nwp-header" href="/" target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </h4>
            <div className="nwp-info">
              <div className="nwp-tech">
                {item.tech.map((item, id) => (
                  <p key={id}>{item}</p>
                ))}
              </div>
              <div className="project-links">
                <a href={item.github} target="_blank" rel="noreferrer" className={item.github || `disabled`}>
                  <Icon name="github" size={23} />
                </a>
                <a href={item.live} target="_blank" rel="noreferrer" className={item.live || `disabled`}>
                  <Icon name="link" size={23} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
