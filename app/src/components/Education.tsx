import { C, EDUCATION, CERTIFICATIONS } from "@/data";
import SectionDivider from "./SectionDivider";


export default function Education() {
  return (
    <section id="education" className="px-6 py-24 max-w-6xl mx-auto">
      <SectionDivider label="03 — Education" />

      <div>
        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            className="py-8 flex flex-col md:flex-row md:items-start gap-2 md:gap-8"
            style={{
              borderBottom:
                i < EDUCATION.length - 1
                  ? `1px solid ${C.grayLight}`
                  : "none",
            }}
          >
            <div className="md:w-44 shrink-0">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: C.gray,
                  letterSpacing: "0.05em",
                }}
              >
                {edu.period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: C.gray,
                  opacity: 0.7,
                  marginTop: "2px",
                }}
              >
                {edu.location}
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: C.navy,
                  letterSpacing: "-0.01em",
                }}
              >
                {edu.school}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: C.gray,
                  marginTop: "2px",
                }}
              >
                {edu.degree}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: C.gray,
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Certifications
        </p>
        <div className="space-y-3">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="flex items-start gap-6">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: C.navy,
                  width: "2.5rem",
                  flexShrink: 0,
                  paddingTop: "2px",
                  fontWeight: 600,
                }}
              >
                {cert.year}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: C.gray,
                }}
              >
                {cert.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
