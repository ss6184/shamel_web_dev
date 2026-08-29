import styles from "./Contact.module.css";

type MessageSentProps = {
  name: string;
  onReset: () => void;
};

export default function MessageSent({ name, onReset }: MessageSentProps) {
  return (
    <div className={styles.success}>
      <div className={styles.check}>✓</div>
      <h3>Message sent!</h3>
      <p>Thanks, {name.split(" ")[0]}. I&apos;ll get back to you soon.</p>
      <button className={styles.secondaryButton} onClick={onReset} type="button">
        Send another
      </button>
    </div>
  );
}
