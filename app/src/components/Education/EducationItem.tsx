import type { getPortfolioData } from "@/lib/actions/portfolio";
import styles from "./Education.module.css";

type PortfolioUser = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>;

type EducationItemProps = {
  item: PortfolioUser["educations"][number];
  last: boolean;
};

export default function EducationItem({ item, last }: EducationItemProps) {
  const period = item.startDate && item.endDate
    ? `${new Date(item.startDate).getFullYear()} – ${new Date(item.endDate).getFullYear()}`
    : "Current";

  return <article className="py-8 flex flex-col md:flex-row md:items-start gap-2 md:gap-8" style={{ borderBottom: last ? "none" : "1px solid var(--gray-light)" }}>
    <div className="md:w-44 shrink-0"><p className={styles.meta}>{period}</p><p className={styles.location}>{item.institution}</p></div>
    <div><h3 className={styles.school}>{item.degree}</h3><p className={styles.degree}>{item.institution}</p></div>
  </article>;
}
