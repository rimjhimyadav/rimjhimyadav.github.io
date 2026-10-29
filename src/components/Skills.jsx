import SectionTitle from "./SectionTitle";

// the main skills are the ones my projects actually use
const skills = [
  {
    title: "Languages",
    list: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    list: ["React", "React Router", "Zustand", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Tools",
    list: ["Git", "GitHub", "Vite", "Vitest", "REST APIs"],
  },
];

// things I've learned or used a bit, shown smaller
const alsoWorkedWith = [
  "Next.js", "Redux Toolkit", "React Query", "Bootstrap", "Material UI",
  "Sass", "Node.js", "Express", "MongoDB", "SQL", "GraphQL", "Jest", "Figma", "Vercel",
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
                  className="px-3.5 py-1 rounded-md border border-line bg-surface text-sm text-body"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-1 pt-3.5 sm:flex-row sm:gap-5">
          <span className="w-28 shrink-0 text-sm font-medium text-light">Also worked with</span>
          <p className="text-sm text-muted">{alsoWorkedWith.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
