import { CERTIFICATIONS } from "../../data";
import styles from "./Education.module.css";

export default function Certifications() {
  return (
    <div className="mt-16">
      <p className={styles.heading}>Certifications</p>
      <div className="space-y-3">
        {CERTIFICATIONS.map((cert) => (
          <div className="flex items-start gap-6" key={cert.title}>
            <span className={styles.year}>{cert.year}</span>
            <span className={styles.degree}>{cert.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
