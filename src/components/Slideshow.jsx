import { useState, useEffect } from "react";

// changes the screenshot every few seconds, like a small demo
// it stays on the first one if the person turned off animations
function Slideshow({ slides, href, title }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return;

    // go to the next screenshot, back to the first after the last one
    const timer = setInterval(() => {
      setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <a
        href={href}
        target="_blank"
        className="relative block aspect-16/10 overflow-hidden rounded-xl border border-line transition hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10"
      >
        {slides.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={title + " - " + slide.name}
            loading={i === 0 ? "eager" : "lazy"}
            className={
              "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 " +
              (i === current ? "opacity-100" : "opacity-0")
            }
          />
        ))}
      </a>

      {/* dots to jump to a screenshot, the active one is wider */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 px-2.5 py-1.5 rounded-full bg-black/45 backdrop-blur-sm">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            onClick={() => setCurrent(i)}
            aria-label={"Show " + slide.name}
            aria-current={i === current}
            className={
              "h-1.5 rounded-full cursor-pointer transition-all " +
              (i === current ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80")
            }
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
