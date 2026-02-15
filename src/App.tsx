import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

export default function App() {
  const isMobile = window.innerWidth < 900;

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: isMobile ? "1.6rem 1.4rem" : "2.8rem 2.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "2.5rem" : "4rem",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 2 }}>
          <Hero isMobile={isMobile} />
          <div style={{ marginTop: "1.6rem" }}>
            <SocialLinks />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <Experience />
        </div>
      </div>
    </main>
  );
}
