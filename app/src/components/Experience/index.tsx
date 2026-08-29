import { EXPERIENCE } from "../../data";
import SectionDivider from "../SectionDivider";
import ExperienceRow from "./ExperienceRow";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`${styles.section} px-6 py-24 max-w-6xl mx-auto`}>
      <SectionDivider label="02 — Experience" />
      {EXPERIENCE.map((job, index) => (
        <ExperienceRow key={job.company} job={job} isLast={index === EXPERIENCE.length - 1} />
      ))}
    </section>
  );
}
