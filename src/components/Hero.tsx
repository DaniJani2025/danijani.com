type HeroProps = {
  isMobile: boolean;
};

export default function Hero({ isMobile }: HeroProps) {
  return (
    <section>
      <h1
        style={{
          marginTop: 0,
          marginBottom: "0.5rem",
          fontSize: isMobile ? "2.1rem" : "2.9rem",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        Dhananjay Jani
      </h1>

      <h2
        style={{
          marginTop: 0,
          marginBottom: "1rem",
          fontSize: isMobile ? "1.05rem" : "1.4rem",
          fontWeight: 400,
          color: "#94a3b8",
        }}
      >
        Full-Stack Developer
      </h2>

      <p
        style={{
          marginTop: 0,
          maxWidth: "540px",
          lineHeight: 1.7,
          color: "#cbd5e1",
          fontSize: isMobile ? "0.95rem" : "1.05rem",
        }}
      >
        I build scalable web applications and interactive digital experiences.
      </p>
    </section>
  );
}
