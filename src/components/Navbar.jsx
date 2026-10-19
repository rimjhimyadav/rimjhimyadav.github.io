import { useState, useEffect } from "react";

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
    <header className="navbar">
      <a href="#" className="logo">🍥 Rimjhim Yadav</a>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
        <a href="/rimjhim_yadav_resume.pdf" download="Rimjhim_Yadav_Resume.pdf">Resume</a>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
