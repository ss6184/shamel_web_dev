import { useState,useEffect,useRef} from "react";
import { C, Job, EXPERIENCE } from "@/data";
import SectionDivider from "./SectionDivider";


function ExperienceRow({
  job,
  isLast,
}: {
  job: Job;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(true);
  const bodyRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      style={{
        borderBottom: isLast ? "none" : `1px solid ${C.grayLight}`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-8"
        style={{ background: "none", cursor: "pointer", border: "none" }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="md:w-44 shrink-0">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: C.gray,
                letterSpacing: "0.05em",
              }}
            >
              {job.period}
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: C.gray,
                opacity: 0.7,
                marginTop: "2px",
              }}
            >
              {job.location}
            </p>
          </div>
          <div className="flex-1 flex items-start justify-between gap-4">
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: C.navy,
                  letterSpacing: "-0.01em",
                }}
              >
                {job.role}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: C.gray,
                  marginTop: "2px",
                }}
              >
                {job.company}
              </p>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.1rem",
                color: open ? C.navy : C.gray,
                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), color 0.2s",
                transform: open ? "rotate(45deg)" : "rotate(0deg)",
                display: "inline-block",
                marginTop: "6px",
              }}
            >
              +
            </span>
          </div>
        </div>
      </button>

      <ul
        ref={bodyRef}
        className="space-y-3 md:ml-52 overflow-hidden"
        style={{
          height: typeof height === "number" ? `${height}px` : height,
          transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
          paddingBottom: open ? "2rem" : 0,
        }}
      >
        {job.points.map((point, i) => (
          <li
            key={i}
            className="flex gap-3"
            style={{
              opacity: open ? 1 : 0,
              transition: `opacity 0.3s ease ${i * 60}ms`,
            }}
          >
            <span
              style={{
                color: C.navy,
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                marginTop: "3px",
                flexShrink: 0,
              }}
            >
              ▸
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: C.gray,
                lineHeight: 1.75,
              }}
            >
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-6xl mx-auto">
      <SectionDivider label="02 — Experience" />
      <div>
        {EXPERIENCE.map((job, i) => (
          <ExperienceRow
            key={i}
            job={job}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
