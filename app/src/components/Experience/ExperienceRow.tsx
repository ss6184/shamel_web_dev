"use client";

import type { getPortfolioData } from "@/lib/actions/portfolio";
import { C } from "../../data";
import styles from "./Experience.module.css";

type PortfolioUser = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>;

type ExperienceRowProps = { job: PortfolioUser["experiences"][number]; isLast: boolean };

export default function ExperienceRow({ job, isLast }: ExperienceRowProps) {
  const border = isLast ? "none" : `1px solid ${C.grayLight}`;
  const startYear = typeof job.startDate === "number" ? job.startDate : new Date(job.startDate).getFullYear();
  const endYear = job.endDate ? (typeof job.endDate === "number" ? job.endDate : new Date(job.endDate).getFullYear()) : "Present";
  const period = `${startYear} – ${endYear}`;

  return (
    <article style={{ borderBottom: border }}>
      <div className="w-full text-left py-8" style={{ background: "none", border: "none" }}>
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="md:w-44 shrink-0"><p className={styles.meta}>{period}</p><p className={styles.location}></p></div>
          <div className="flex-1 flex items-start justify-between gap-4"><div><h3 className={styles.role}>{job.title}</h3><p className={styles.company}>{job.company}</p></div></div>
        </div>
      </div>
      <ul className="space-y-3 md:ml-52 pb-8">
        <li className="flex gap-3"><span className={styles.bullet}>▸</span><p className={styles.point}>{job.title}</p></li>
      </ul>
    </article>
  );
}
