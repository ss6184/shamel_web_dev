"use client";

import { C, type Job } from "../../data";
import { useExperienceRow } from "./useExperienceRow";
import styles from "./Experience.module.css";

type ExperienceRowProps = { job: Job; isLast: boolean };

export default function ExperienceRow({ job, isLast }: ExperienceRowProps) {
  const { open, setOpen, height, bodyRef } = useExperienceRow();
  const border = isLast ? "none" : `1px solid ${C.grayLight}`;

  return (
    <article style={{ borderBottom: border }}>
      <button className="w-full text-left py-8" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer" }}>
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="md:w-44 shrink-0"><p className={styles.meta}>{job.period}</p><p className={styles.location}>{job.location}</p></div>
          <div className="flex-1 flex items-start justify-between gap-4"><div><h3 className={styles.role}>{job.role}</h3><p className={styles.company}>{job.company}</p></div><span className={styles.toggle} style={{ color: open ? C.navy : C.gray, transform: open ? "rotate(45deg)" : "none" }}>+</span></div>
        </div>
      </button>
      <ul ref={bodyRef} className="space-y-3 md:ml-52 overflow-hidden" style={{ height: typeof height === "number" ? `${height}px` : height, transition: "height .35s ease", paddingBottom: open ? "2rem" : 0 }}>
        {job.points.map((point) => <li className="flex gap-3" key={point}><span className={styles.bullet}>▸</span><p className={styles.point}>{point}</p></li>)}
      </ul>
    </article>
  );
}
