"use client";

import { C, SKILLS } from "@/data";
import SectionDivider from "./SectionDivider";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-6xl mx-auto">
      <SectionDivider label="05 — Skills" />
      <div className="grid gap-12 md:grid-cols-2">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category}>
            <p
              className="mb-5"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: C.navy,
                textTransform: "uppercase",
              }}
            >
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 transition-all duration-150"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: C.gray,
                    border: `1px solid ${C.grayLight}`,
                    borderRadius: "2px",
                    background: C.grayXLight,
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.navy;
                    e.currentTarget.style.color = C.navy;
                    e.currentTarget.style.background = C.bg;
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.grayLight;
                    e.currentTarget.style.color = C.gray;
                    e.currentTarget.style.background = C.grayXLight;
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
