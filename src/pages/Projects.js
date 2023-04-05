import data from "../utilities/projects";
import { Icon } from "../components/Icons";

export default function Projects() {
  return (
    <div className="projects">
      {data.map((item, id) => (
        <div className="project-item" key={id}>
          <a href={item.live}>
            <div className="project-img" style={{ backgroundImage: `url(${item.image})` }} />
          </a>
          <div className="project-info">
            <h3>{item.name}</h3>
            <p className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <ul className="project-tech">
              {item.tech.map((item, id)=>(
                <li key={id}>{item}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={item.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={23} />
              </a>
              <a href={item.live} target="_blank" rel="noreferrer">
                <Icon name="link" size={23} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
