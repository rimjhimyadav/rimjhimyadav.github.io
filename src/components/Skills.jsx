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
    <section id="skills" className="section">
      <div className="section-head">
        <h2>🧰 Skills</h2>
      </div>
      <p className="section-desc">Stuff I use to build things.</p>

      <div className="skill-groups">
        {skills.map((group) => (
          <div className="skill-row" key={group.title}>
            <span className="skill-title">{group.title}</span>
            <div className="skills">
              {group.list.map((skill) => (
                <span className="skill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
