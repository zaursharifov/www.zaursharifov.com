import data from "../utilities/projects";
import { Icon } from "../components/Icons";

export default function Projects() {
  return (
    <div className="projects">
      {data.map((item, id) => (
        <div className="project-item" key={id}>
          <a href={item.l}>
            <div className="project-img" style={{ backgroundImage: `url(${item.i})` }} />
          </a>
          <div className="project-info">
            <h3>{item.a}</h3>
            <p className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <ul>
              <li>React js</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
            <div className="project-links">
              <a href={item.g}>
                <Icon name="github" size={20} />
              </a>
              <a href={item.l}>
                <Icon name="link" size={20} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
