import Slideshow from "./Slideshow";

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

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2.5">
      {tags.map((tag) => (
        <span key={tag} className="px-2 py-0.5 rounded-md bg-accent/10 text-xs font-medium text-accent">
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  // featured project gets a big image on top
  if (project.featured) {
    return (
      <div className="pb-6 border-b border-line">
        {project.slides ? (
          <Slideshow slides={project.slides} href={project.live || project.code} title={project.title} />
        ) : (
          <a href={project.live || project.code} target="_blank">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover object-top rounded-xl border border-line transition hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10"
            />
          </a>
        )}

        <div className="flex items-baseline justify-between gap-2.5 mt-4">
          <h3 className="text-xl font-semibold">
            {project.title}
            <span className="ml-2 px-2 py-0.5 rounded-full border border-accent/25 bg-accent/10 text-xs font-medium text-accent align-middle">
              ⭐ Featured
            </span>
          </h3>
          <ProjectLinks project={project} />
        </div>
        <p className="mt-1.5 leading-relaxed text-muted">{project.description}</p>
        <Tags tags={project.tags} />
      </div>
    );
  }

  return (
    <div>
      <a href={project.live || project.code} target="_blank">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-16/10 object-cover object-top rounded-lg border border-line transition hover:border-accent/60"
        />
      </a>

      <div className="mt-3.5">
        <div className="flex items-baseline justify-between gap-2.5">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <ProjectLinks project={project} />
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <Tags tags={project.tags} />
      </div>
    </div>
  );
}

export default ProjectCard;
