"use client";

import { cn } from "@/lib/utils";
import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { Dropdown, DropdownProps } from "primereact/dropdown";
import { useId } from "react";

type Props = DropdownProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
  placeholder?: string;
};

function TextField({
  name,
  id,
  label,
  placeholder,
  disabled,
  error,
  helperText,
  requiredIcon,
  className,
  ...rest
}: Props) {
  const generatedID = useId();
  const inputId = id || generatedID;

  return (
    <div className="w-full">
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className="text-black text-sm font-normal font-inter"
          >
            {label}
          </label>
        )}
        {requiredIcon && (
          <label htmlFor={inputId} className="text-red-500">
            {requiredIcon}
          </label>
        )}
      </div>
      <div>
        <Dropdown
          id={inputId}
          name={name}
          disabled={disabled}
          onFocus={(e) => e.target.select()}
          placeholder={placeholder}
          className={cn(
            "h-[42px] rounded-none border border-outline  shadow-none text-sm color-mainText w-full font-inter mt-2",
            className,
          )}
          {...rest}
        />
      </div>

      {error && <small className="text-red-500">{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </div>
  );
}

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: String;
  props?: Props;
};

export function FormikSelectField({
  props,
  apiError,
  disabled,
  ...rest
}: FormikTextFieldProps) {
  return (
    <Field {...rest}>
      {({
        meta: { touched, error },
        form: { isSubmitting },
      }: FieldProps<string>) => (
        <TextField
          {...props}
          disabled={disabled || isSubmitting}
          error={!!apiError || (touched && !!error)}
          helperText={
            apiError
              ? (apiError as string)
              : touched && !!error
                ? (error as string)
                : props?.helperText
          }
        />
      )}
    </Field>
  );
}
