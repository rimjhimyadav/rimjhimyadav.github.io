import { useState, useEffect } from "react";

const linkClass = "text-sm text-muted hover:text-main hover:no-underline";

function Navbar() {
  const [dark, setDark] = useState(localStorage.getItem("theme") !== "light");

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 py-5.5 border-b border-line">
      <a href="#" className="font-semibold text-main">🍥 Rimjhim Yadav</a>
      <nav className="flex w-full items-center gap-4 sm:w-auto sm:gap-5.5">
        <a href="#projects" className={linkClass}>Projects</a>
        <a href="#journey" className={linkClass}>Journey</a>
        <a href="#contact" className={linkClass}>Contact</a>
        <a href="/rimjhim_yadav_resume.pdf" download="Rimjhim_Yadav_Resume.pdf" className={linkClass}>Resume</a>
        <button
          className="ml-auto sm:ml-0 w-8 h-8 rounded-md cursor-pointer hover:bg-line"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
