import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { useId } from "react";

type Props = InputTextareaProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
};

function TextAreaField({
  name,
  id,
  label,
  disabled,
  className = "",
  error,
  helperText,
  requiredIcon,
  ...rest
}: Props) {
  const generatedID = useId();
  const inputId = id || generatedID;

  return (
    <div className="w-full">
      <div>
        {label && (
          <label
            style={{
              color: "#333333",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        {requiredIcon && <label style={{ color: "red" }}>{requiredIcon}</label>}
      </div>
      <InputTextarea
        className={`w-full ${className} `}
        id={inputId}
        name={name}
        disabled={disabled}
        onFocus={(e) => e.target.select()}
        rows={5}
        {...rest}
      />

      {error && <small className={"p-error"}>{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </div>
  );
}

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: String;
  props?: Props;
};

export function FormikTextAreaField({
  props,
  apiError,
  disabled,
  ...rest
}: FormikTextFieldProps) {
  return (
    <Field {...rest}>
      {({
        field,
        meta: { touched, error },
        form: { isSubmitting },
      }: FieldProps<string>) => {
        const hasError = !!apiError || (touched && !!error)
        return (
          <TextAreaField
            {...field}
            {...props}
            disabled={disabled || isSubmitting}
            error={hasError}
            helperText={
              apiError
                ? (apiError as string)
                : touched && !!error
                ? (error as string)
                : props?.helperText
            }
          />
        );
      }}
    </Field>
  );
}
