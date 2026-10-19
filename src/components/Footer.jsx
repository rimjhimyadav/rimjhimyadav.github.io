const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>
          <span className="jp-thanks">ありがとう</span> (arigatou) for stopping by! 🍥
        </p>
        <p className="copyright">
          © {year} Rimjhim Yadav - <a href="https://github.com/rimjhimyadav/rimjhimyadav.github.io" target="_blank">Made with React</a>
        </p>
      </div>

      <div className="footer-links">
        <a href="https://github.com/rimjhimyadav" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/rimjhimyadav/" target="_blank">LinkedIn</a>
        <a href="mailto:code.rimjhimyadav@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
