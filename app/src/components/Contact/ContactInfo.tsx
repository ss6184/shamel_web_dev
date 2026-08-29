import { CONTACT_ITEMS } from "../../data";
import styles from "./Contact.module.css";

export default function ContactInfo() {
  return (
    <div>
      <h2 className={styles.title}>
        Let&apos;s grow<br /><strong>together.</strong>
      </h2>
      <p className={styles.description}>
        Open to OJT placements, entry-level IT roles, and technical support
        positions. Based in Mandaluyong City, available in Metro Manila and remotely.
      </p>
      <div className={styles.contactList}>
        {CONTACT_ITEMS.map((item) => (
          <a className={styles.contactItem} href={item.href} key={item.label}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>
              {item.value}{item.href !== "#" && <span className={styles.arrow}> ↗</span>}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
