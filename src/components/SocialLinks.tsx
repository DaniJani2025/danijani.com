export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/DaniJani2025"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <img src="/Github-logo.svg" width="22" height="22" alt="GitHub" />
      </a>

      <a
        href="https://www.linkedin.com/in/dhananjay-jani-6b8367281/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <img src="/linkedin-logo.svg" width="22" height="22" alt="LinkedIn" />
      </a>

      <a href="mailto:hello@danijani.com" aria-label="Email">
        <img src="/Email-logo.svg" width="22" height="22" alt="Email" />
      </a>
    </div>
  );
}
