export type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export type ContactField = keyof ContactFormState;

export const EMPTY_FORM: ContactFormState = {
  name: "",
  email: "",
  message: "",
};
