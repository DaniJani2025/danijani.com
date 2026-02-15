import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

const skills = [
  "C# / .NET 8",
  "ASP.NET Core Web API",
  "React + TypeScript",
  "SQL / Database Design",
  "Encryption Fundamentals",
  "REST API Architecture",
];

export default function App() {
  return (
    <main className="page">
      <section className="panel intro">
        <Hero />
        <SocialLinks />
      </section>

      <section className="panel split">
        <article>
          <h3 className="section-title">Target Role</h3>
          <p className="copy">
            Full Stack Developer focused on .NET 8 backend services and React
            frontend applications, with practical knowledge of databases and
            encryption.
          </p>
        </article>
        <article>
          <h3 className="section-title">Education</h3>
          <ul className="list">
            <li>Bachelor of Computer Applications (B.C.A.)</li>
            <li>12th Science (Mathematics)</li>
          </ul>
        </article>
      </section>

      <section className="panel">
        <h3 className="section-title">Core Skills</h3>
        <ul className="tags">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <Experience />
      </section>
    </main>
  );
}
