"use client";
import type { getPortfolioData } from "@/lib/actions/portfolio";
import { C } from "../../data";
import SectionDivider from "../SectionDivider";

type PortfolioUser = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>;

type SkillsProps = {
  skills?: PortfolioUser["skills"];
};

export default function Skills({ skills }: SkillsProps) {
  const items = skills ?? [];

  return (
    <section >
      <SectionDivider label="05 — Skills" />
      <div className="grid gap-12 md:grid-cols-2">
        <div>
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
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: C.gray,
                  border: `1px solid ${C.grayLight}`,
                  borderRadius: "2px",
                  background: C.grayXLight,
                  cursor: "default",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
