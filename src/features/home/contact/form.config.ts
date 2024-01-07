import * as yup from "yup";

export const ContactFormSchema = yup.object({
  name: yup.string().label("Your Name").required(),
  email: yup.string().label("Your Email").required(),
  subject: yup.string().label("Subject"),
  message: yup.string().label("Message").required().min(10).max(255),
});

export type TContactForm = yup.InferType<typeof ContactFormSchema>;

export const InitialValue: TContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
