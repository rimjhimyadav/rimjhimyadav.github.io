import { useState } from "react";
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

function Projects() {
  const [showAll, setShowAll] = useState(false);

  // show 4 small projects first, rest after clicking show more
  let visible = others;
  if (!showAll) {
    visible = others.slice(0, 4);
  }

  return (
    <section id="projects" className="pt-14">
      <SectionTitle title="🛠️ Projects" desc="Things I've built.">
        <a
          href="https://github.com/rimjhimyadav"
          target="_blank"
          className="text-sm font-medium text-main hover:text-accent hover:no-underline"
        >
          GitHub ›
        </a>
      </SectionTitle>

      {featured.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      {/* small projects in 2 columns on bigger screens */}
      <div className="grid gap-x-6 gap-y-10 mt-8 sm:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {others.length > 4 && (
        <button
          className="block mx-auto mt-8 px-4.5 py-2 rounded-lg border border-line text-sm text-muted cursor-pointer hover:text-accent hover:border-accent"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less ↑" : "Show all " + others.length + " projects ↓"}
        </button>
      )}
    </section>
  );
}

export default Projects;
