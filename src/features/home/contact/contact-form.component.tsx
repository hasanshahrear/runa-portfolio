"use client";

import { FormikSubmitButton, FormikTextField } from "@/features/ui";
import { FormikTextAreaField } from "@/features/ui/form/formik-input-textarea.component";
import { Form } from "formik";

export function ContactForm() {
  return (
    <Form className="flex gap-4 flex-col">
      <div className="flex flex-col md:flex-row gap-4">
        <FormikTextField
          name="name"
          props={{
            label: "Your Name",
            placeholder: "Ex: Jon Doe",
            requiredIcon: " *",
          }}
        />
        <FormikTextField
          name="email"
          props={{
            label: "Your Email",
            placeholder: "Ex: jondoe@gmail.com",
            requiredIcon: " *",
          }}
        />
      </div>
      <FormikTextField
        name="subject"
        props={{
          label: "Subject",
          placeholder: "Ex: UI/UX Design",
        }}
      />
      <FormikTextAreaField
        name="message"
        props={{
          label: "Your Message",
          placeholder: "Explain your message",
          requiredIcon: " *",
        }}
      />
      <FormikSubmitButton>Submit</FormikSubmitButton>
    </Form>
  );
}
