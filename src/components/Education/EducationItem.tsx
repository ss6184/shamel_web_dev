import type { School } from "../../data";
import styles from "./Education.module.css";

export default function EducationItem({ item, last }: { item: School; last: boolean }) {
  return <article className="py-8 flex flex-col md:flex-row md:items-start gap-2 md:gap-8" style={{ borderBottom: last ? "none" : "1px solid var(--gray-light)" }}>
    <div className="md:w-44 shrink-0"><p className={styles.meta}>{item.period}</p><p className={styles.location}>{item.location}</p></div>
    <div><h3 className={styles.school}>{item.school}</h3><p className={styles.degree}>{item.degree}</p></div>
  </article>;
}
