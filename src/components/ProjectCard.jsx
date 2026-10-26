function ProjectLinks({ project }) {
  return (
    <div className="flex gap-3.5 text-sm whitespace-nowrap">
      {project.live && (
        <a href={project.live} target="_blank">Live ↗</a>
      )}
      <a href={project.code} target="_blank">Code ↗</a>
    </div>
  );
}

function ProjectCard({ project }) {
  // featured project gets a big image on top
  if (project.featured) {
    return (
      <div className="pb-6 border-b border-line">
        <a href={project.live || project.code} target="_blank">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover object-top rounded-xl border border-line hover:opacity-90 transition-opacity"
          />
        </a>

        <div className="flex items-baseline justify-between gap-2.5 mt-4">
          <h3 className="text-xl font-semibold">
            {project.title}
            <span className="ml-2 px-2 py-0.5 rounded-full border border-line text-xs font-medium text-link align-middle">
              ⭐ Featured
            </span>
          </h3>
          <ProjectLinks project={project} />
        </div>
        <p className="mt-1.5 leading-relaxed text-muted">{project.description}</p>
        <p className="mt-1.5 text-sm text-link">{project.tags.join(", ")}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 py-5.5 first:pt-0 border-b border-line sm:flex-row sm:gap-5">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-16/10 sm:w-32.5 sm:h-20.5 sm:aspect-auto shrink-0 object-cover object-top rounded-lg border border-line"
      />

      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2.5">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <ProjectLinks project={project} />
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <p className="mt-1 text-xs text-link">{project.tags.join(", ")}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
