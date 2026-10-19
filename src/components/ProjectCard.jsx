function ProjectCard({ project }) {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />

      <div className="project-info">
        <div className="project-top">
          <h3>{project.title}</h3>
          <div className="project-links">
            {project.live && (
              <a href={project.live} target="_blank">Live ↗</a>
            )}
            <a href={project.code} target="_blank">Code ↗</a>
          </div>
        </div>
        <p>{project.description}</p>
        <p className="tech">{project.tags.join(", ")}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
