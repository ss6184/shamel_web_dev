import { useState } from "react";
import { C, PROJECTS, type Project } from "@/data";
import SectionDivider from "./SectionDivider";

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-8 flex flex-col gap-4 h-full"
      style={{
        background: hovered ? C.grayXLight : C.bg,
        transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 32px rgba(28,47,74,0.07)" : "none",
        cursor: "default",
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.3rem",
            fontWeight: 400,
            color: C.navy,
            letterSpacing: "-0.01em",
            transition: "opacity 0.2s",
            opacity: hovered ? 1 : 0.85,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: C.gray,
            marginTop: "4px",
            letterSpacing: "0.05em",
          }}
        >
          {project.tag}
        </p>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: C.gray,
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {project.desc}
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      <SectionDivider label="04 — Projects" />
      <div
        className="grid gap-px"
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%,320px),1fr))",
          background: C.grayLight,
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
