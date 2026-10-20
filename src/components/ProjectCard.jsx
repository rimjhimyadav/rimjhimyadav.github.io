function ProjectCard({ project }) {
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
          <div className="flex gap-3.5 text-sm whitespace-nowrap">
            {project.live && (
              <a href={project.live} target="_blank">Live ↗</a>
            )}
            <a href={project.code} target="_blank">Code ↗</a>
          </div>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <p className="mt-1 text-xs text-link">{project.tags.join(", ")}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
