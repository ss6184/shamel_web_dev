import { C } from "../../data";
import styles from "./SectionDivider.module.css";

export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className={`${styles.divider} flex items-center gap-4 mb-16`}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          color: C.navy,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: C.grayLight }} />
    </div>
  );
}
