import SectionTitle from "./SectionTitle";

const skills = [
  {
    title: "Languages",
    list: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    list: ["React", "Next.js", "Redux Toolkit", "React Query", "React Router"],
  },
  {
    title: "Styling",
    list: ["Tailwind CSS", "Bootstrap", "Material UI", "Sass", "Responsive Design"],
  },
  {
    title: "Backend",
    list: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools",
    list: ["Git", "GitHub", "Vite", "Jest", "Figma", "Vercel"],
  },
];

function Skills() {
  return (
    <section id="skills" className="pt-14">
      <SectionTitle title="🧰 Skills" desc="Stuff I use to build things." />

      <div>
        {skills.map((group) => (
          <div className="flex flex-col gap-2 py-3.5 first:pt-0 border-b border-line sm:flex-row sm:gap-5" key={group.title}>
            <span className="w-28 shrink-0 pt-1 text-sm font-medium text-light">{group.title}</span>
            <div className="flex flex-wrap gap-2.5">
              {group.list.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1 rounded-md border border-line text-sm text-body transition hover:text-link hover:border-link"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
