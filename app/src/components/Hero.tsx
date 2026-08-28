import { C } from "@/data";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
      id="about"
    >
      <div className="relative z-10 max-w-3xl">
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-mono)",
            color: C.navy,
            letterSpacing: "0.25em",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Available for OJT &amp; Entry-Level Opportunities
        </p>

        <h1
          className="leading-none mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 300,
            color: C.navy,
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
          }}
        >
          Shamel B.
          <br />
          <span style={{ fontWeight: 600 }}>Ocampo</span>
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-7">
          {["IT Student", "Rizal Technological University", "Mandaluyong City"].map(
            (item, i, arr) => (
              <span key={item} className="inline-flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: C.gray,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span
                    style={{
                      width: 1,
                      height: 12,
                      background: C.grayLight,
                      display: "inline-block",
                    }}
                  />
                )}
              </span>
            )
          )}
        </div>

        <p
          className="max-w-xl mb-10"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: C.gray,
            lineHeight: 1.85,
          }}
        >
          A dedicated and highly motivated IT student seeking an on-the-job
          training opportunity. I aim to apply my basic knowledge and contribute
          to your team while gaining hands-on industry experience in technical
          support, networking, and software operations.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: "var(--font-body)",
              background: C.navy,
              color: C.bg,
              borderRadius: "2px",
              fontWeight: 500,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 16px rgba(28,47,74,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition-all duration-200"
            style={{
              fontFamily: "var(--font-body)",
              border: `1px solid ${C.grayLight}`,
              color: C.gray,
              borderRadius: "2px",
              fontWeight: 400,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.navy;
              e.currentTarget.style.color = C.navy;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.grayLight;
              e.currentTarget.style.color = C.gray;
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-6 flex items-center gap-3"
        style={{ opacity: 0.4 }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            color: C.gray,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div style={{ width: 32, height: 1, background: C.grayLight }} />
      </div>
    </section>
  );
}
