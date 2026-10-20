const year = new Date().getFullYear();

const linkClass = "text-light hover:text-link";

function Footer() {
  return (
    <footer className="flex flex-col items-start gap-3 mt-20 pt-6 pb-10 border-t border-line text-sm text-light sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p>
          <span className="font-medium text-link">ありがとう</span> (arigatou) for stopping by! 🍥
        </p>
        <p className="mt-0.5 text-xs">
          © {year} Rimjhim Yadav - <a href="https://github.com/rimjhimyadav/rimjhimyadav.github.io" target="_blank" className="text-light underline hover:text-link">Made with React</a>
        </p>
      </div>

      <div className="flex gap-4.5">
        <a href="https://github.com/rimjhimyadav" target="_blank" className={linkClass}>GitHub</a>
        <a href="https://www.linkedin.com/in/rimjhimyadav/" target="_blank" className={linkClass}>LinkedIn</a>
        <a href="mailto:code.rimjhimyadav@gmail.com" className={linkClass}>Email</a>
      </div>
    </footer>
  );
}

export default Footer;
