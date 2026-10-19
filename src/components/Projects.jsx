import { useState } from "react";
import projects from "../projects";
import ProjectCard from "./ProjectCard";

// only show a filter if at least one project has that type
const filters = ["All", "React", "JavaScript"].filter(
  (f) => f === "All" || projects.some((p) => p.type === f)
);

function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  let list = projects;
  if (filter !== "All") {
    list = projects.filter((p) => p.type === filter);
  }

  // show 5 projects first, rest after clicking show more
  let visible = list;
  if (!showAll) {
    visible = list.slice(0, 5);
  }

  function changeFilter(f) {
    setFilter(f);
    setShowAll(false);
  }

  return (
    <section id="projects" className="section">
      <div className="section-head">
        <h2>🛠️ Projects</h2>
        <a href="https://github.com/rimjhimyadav" target="_blank">GitHub ›</a>
      </div>
      <p className="section-desc">Things I built while learning.</p>

      {filters.length > 2 && (
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "filter-btn active" : "filter-btn"}
              onClick={() => changeFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="project-list">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {list.length > 5 && (
        <button className="show-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less ↑" : "Show all " + list.length + " projects ↓"}
        </button>
      )}
    </section>
  );
}

export default Projects;
