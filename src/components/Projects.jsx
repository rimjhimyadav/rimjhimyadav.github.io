import { useState } from "react";
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

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
    <section id="projects" className="pt-14">
      <SectionTitle title="🛠️ Projects" desc="Things I've built.">
        <a
          href="https://github.com/rimjhimyadav"
          target="_blank"
          className="text-sm font-medium text-main hover:text-link hover:no-underline"
        >
          GitHub ›
        </a>
      </SectionTitle>

      {filters.length > 2 && (
        <div className="flex gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              className={
                "px-4 py-1 rounded-full border text-sm cursor-pointer " +
                (filter === f
                  ? "bg-main border-main text-page"
                  : "border-line text-muted hover:text-main")
              }
              onClick={() => changeFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div>
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {list.length > 5 && (
        <button
          className="block mx-auto mt-5 px-4.5 py-2 rounded-lg border border-line text-sm text-muted cursor-pointer hover:text-link hover:border-link"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less ↑" : "Show all " + list.length + " projects ↓"}
        </button>
      )}
    </section>
  );
}

export default Projects;
