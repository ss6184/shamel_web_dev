"use client";
import type { getPortfolioData } from "@/lib/actions/portfolio";
import SectionDivider from "../SectionDivider";
import styles from "./Skills.module.css";

type PortfolioUser = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>;

type SkillsProps = {
  skills?: PortfolioUser["skills"];
};

export default function Skills({ skills }: SkillsProps) {
  const items = skills ?? [];

  return (
    <section id="skills" className={`${styles.section} px-6 py-24 max-w-6xl mx-auto`}>
      <SectionDivider label="05 — Skills" />
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span key={skill.id} className={`${styles.tag} px-3 py-1.5`}>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
