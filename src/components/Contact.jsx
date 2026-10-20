import { useState } from "react";
import SectionTitle from "./SectionTitle";

const email = "code.rimjhimyadav@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="pt-14">
      <SectionTitle
        title="👋 Say hi"
        desc="Have a job, an internship or just want to talk? Email is the best way to reach me."
      />

      <div className="inline-flex flex-wrap items-center gap-3.5 py-2 pr-2.5 pl-4 rounded-lg border border-line">
        <a href={"mailto:" + email}>{email}</a>
        <button
          onClick={copyEmail}
          title="Copy email"
          className={
            "flex items-center p-1 text-sm cursor-pointer " +
            (copied ? "text-green-500" : "text-light hover:text-main")
          }
        >
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

      <p className="mt-4 text-sm text-muted">
        You can also find me on <a href="https://www.linkedin.com/in/rimjhimyadav/" target="_blank">LinkedIn</a> and <a href="https://github.com/rimjhimyadav" target="_blank">GitHub</a>.
      </p>
    </section>
  );
}

export default Contact;
