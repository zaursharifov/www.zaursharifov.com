import data from "../utilities/projects";
import { Icon } from "../components/Icons";

export default function Projects() {
  return (
    <>
      <h2 className="project-header">Featured Projects</h2>
      <div className="projects">
        {data.map((item, id) => (
          <div className={item.status === 1 ? `project-item` : `project-item-2`} key={id}>
            <a href={item.live}>
              <div className="project-img" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="overlay"></div>
              </div>
            </a>
            <div className={item.status === 1 ? `project-info` : `project-info-2`}>
              <h3>{item.name}</h3>
              <p className={item.status === 1 ? "project-text" : "project-text-2"}>{item.text}</p>
              <div className="project-tech">
                {item.tech.map((item, id) => (
                  <p key={id}>{item}</p>
                ))}
              </div>
              <div className="project-links">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <Icon name="github" size={23} />
                  </a>
                )}
                {item.live && (
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <Icon name="link" size={23} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
