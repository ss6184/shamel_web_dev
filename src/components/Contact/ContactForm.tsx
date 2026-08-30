import type { ContactField, ContactFormState } from "./contact.types";
import styles from "./Contact.module.css";

type ContactFormProps = {
  form: ContactFormState;
  focused: ContactField | null;
  onChange: (field: ContactField, value: string) => void;
  onFocus: (field: ContactField) => void;
  onBlur: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const fields: { name: ContactField; label: string; type: "text" | "email" }[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
];

export default function ContactForm(props: ContactFormProps) {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      {fields.map((field) => (
        <label className={styles.field} key={field.name}>
          <span>{field.label}</span>
          <input type={field.type} value={props.form[field.name]} placeholder={`Your ${field.label.toLowerCase()}`} onChange={(e) => props.onChange(field.name, e.target.value)} onFocus={() => props.onFocus(field.name)} onBlur={props.onBlur} className={props.focused === field.name ? styles.inputFocused : ""} />
        </label>
      ))}
      <label className={styles.field}>
        <span>Message</span>
        <textarea rows={5} value={props.form.message} placeholder="What&apos;s on your mind?" onChange={(e) => props.onChange("message", e.target.value)} onFocus={() => props.onFocus("message")} onBlur={props.onBlur} className={props.focused === "message" ? styles.inputFocused : ""} />
      </label>
      <button className={styles.submitButton} type="submit">Send Message →</button>
    </form>
  );
}
