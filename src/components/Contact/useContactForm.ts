"use client";

import { useState } from "react";
import { EMPTY_FORM, type ContactField, type ContactFormState } from "./contact.types";

export function useContactForm() {
  const [form, setForm] = useState<ContactFormState>(EMPTY_FORM);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<ContactField | null>(null);

  const updateField = (field: ContactField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(form).some((value) => !value.trim())) return;
    setSent(true);
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setSent(false);
    setFocused(null);
  };

  return { form, sent, focused, updateField, submit, reset, setFocused };
}
