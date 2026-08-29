"use client";

import SectionDivider from "../SectionDivider";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MessageSent from "./MessageSent";
import styles from "./Contact.module.css";
import { useContactForm } from "./useContactForm";

export default function Contact() {
  const contact = useContactForm();

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto" id="contact">
      <SectionDivider label="06 — Contact" />
      <div className={styles.layout}>
        <ContactInfo />
        {contact.sent ? (
          <MessageSent name={contact.form.name} onReset={contact.reset} />
        ) : (
          <ContactForm
            form={contact.form}
            focused={contact.focused}
            onChange={contact.updateField}
            onFocus={contact.setFocused}
            onBlur={() => contact.setFocused(null)}
            onSubmit={contact.submit}
          />
        )}
      </div>
    </section>
  );
}
