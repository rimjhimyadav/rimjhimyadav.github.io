import { useState } from "react";

const email = "code.rimjhimyadav@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <h2>👋 Say hi</h2>
      </div>
      <p className="section-desc">
        Have a job, an internship or just want to talk? Email is the best way to
        reach me.
      </p>

      <div className="email-box">
        <a href={"mailto:" + email}>{email}</a>
        <button onClick={copyEmail} className={copied ? "copied" : ""} title="Copy email">
          {copied ? (
            "✓ Copied"
          ) : (
            // copy icon from feathericons.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>
      </div>

      <p className="other-links">
        You can also find me on <a href="https://www.linkedin.com/in/rimjhimyadav/" target="_blank">LinkedIn</a> and <a href="https://github.com/rimjhimyadav" target="_blank">GitHub</a>.
      </p>
    </section>
  );
}

export default Contact;
