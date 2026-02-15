export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Contact and footer links">
      <p className="footer-cta">Open to internships and full-time roles.</p>

      <div className="footer-contact">
        <a href="mailto:hello@danijani.com">hello@danijani.com</a>
        <span className="footer-separator" aria-hidden="true">•</span>
        <span>Ahmedabad, India</span>
      </div>

      <div className="footer-links">
        <a
          href="https://github.com/DaniJani2025"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dhananjay-jani-6b8367281/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>

      <p className="footer-copy">© {year} Dhananjay Jani</p>
    </footer>
  );
}
