import projects from "../projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <h2>🛠️ Projects</h2>
        <a href="https://github.com/rimjhimyadav" target="_blank">GitHub ›</a>
      </div>
      <p className="section-desc">Things I built while learning.</p>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
