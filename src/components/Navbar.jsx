const linkClass = "text-sm text-muted hover:text-main hover:no-underline";

function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 py-5.5 border-b border-line">
      <a href="#" className="font-semibold text-main">🍥 Rimjhim Yadav</a>
      <nav className="flex w-full items-center gap-4 sm:w-auto sm:gap-5.5">
        <a href="#projects" className={linkClass}>Projects</a>
        <a href="#journey" className={linkClass}>Journey</a>
        <a href="#contact" className={linkClass}>Contact</a>
        <a href="/rimjhim_yadav_resume.pdf" download="Rimjhim_Yadav_Resume.pdf" className={linkClass}>Resume</a>
      </nav>
    </header>
  );
}

export default Navbar;
