import type { getPortfolioData } from "@/lib/actions/portfolio";
import SectionDivider from "../SectionDivider";
import ExperienceRow from "./ExperienceRow";
import styles from "./Experience.module.css";

type PortfolioUser = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>;

type ExperienceProps = {
  experiences?: PortfolioUser["experiences"];
};

export default function Experience({ experiences }: ExperienceProps) {
  const items = experiences ?? [];

  return (
    <section id="experience" className={`${styles.section} px-6 py-24 max-w-6xl mx-auto`}>
      <SectionDivider label="02 — Experience" />
      {items.map((job, index) => (
        <ExperienceRow key={job.id} job={job} isLast={index === items.length - 1} />
      ))}
    </section>
  );
}
