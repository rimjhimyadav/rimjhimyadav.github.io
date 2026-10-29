import SectionTitle from "./SectionTitle";

const journey = [
  {
    year: "2020 - 2023",
    title: "BCA - GL Bajaj Institute of Technology",
    text: "Bachelor of Computer Applications",
    icon: "🎓",
  },
  {
    year: "2024 - 2026",
    title: "MCA - Sharda University",
    text: "Master of Computer Applications",
    icon: "🎓",
  },
  {
    year: "2026",
    title: "Built my portfolio projects",
    text: "Reelmark, Git Wanted, Clackr and more",
    icon: "💻",
  },
  {
    year: "next?",
    title: "My first frontend role",
    text: "Maybe at your company 👀 believe it!",
    icon: "🚀",
  },
];

function Journey() {
  return (
    <section id="journey" className="pt-14">
      <SectionTitle title="🗺️ Journey" desc="How I got here so far." />

      {/* the before: part draws the line behind the icons */}
      <div className="relative before:absolute before:left-[17px] before:top-2.5 before:bottom-2.5 before:w-0.5 before:bg-line">
        {journey.map((item) => (
          <div className="group relative flex gap-4.5 mb-6" key={item.title}>
            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface transition group-hover:border-accent group-hover:bg-accent/10">
              {item.icon}
            </div>
            <div>
              <span className="font-mono text-xs text-light">{item.year}</span>
              <h3 className="font-semibold leading-snug">{item.title}</h3>
              <p className="text-sm text-light">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
