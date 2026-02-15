export default function Experience() {
  return (
    <article className="experience">
      <h3 className="section-title">Experience</h3>
      <p className="role">Software Developer</p>
      <p className="org">Cygnet.One</p>
      <p className="duration">1 year</p>
      <p className="copy">
        Worked across automation and full-stack delivery, building production
        workflows for scraping, document processing, financial reconciliation,
        and web applications.
      </p>
      <ul className="experience-list">
        <li>Built Python Selenium web scraping projects and Flask APIs.</li>
        <li>Developed PDF extractors/generators and general automation bots.</li>
        <li>Implemented financial automation for Excel reconciliation tasks.</li>
        <li>Built backend APIs using ASP.NET Core with .NET 8.</li>
        <li>Delivered frontend features in React for full-stack projects.</li>
        <li>
          Worked with Microsoft SQL Server and PostgreSQL, including database
          triggers.
        </li>
        <li>
          Used Entity Framework Core (.NET 8) as the primary ORM for data
          access.
        </li>
      </ul>
    </article>
  );
}
