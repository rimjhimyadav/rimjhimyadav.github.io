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
    text: "Anime Finder, Country Explorer, Pokédex and more",
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
    <section id="journey" className="section">
      <div className="section-head">
        <h2>🗺️ Journey</h2>
      </div>
      <p className="section-desc">How I got here so far.</p>

      <div className="timeline">
        {journey.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-icon">{item.icon}</div>
            <div>
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
