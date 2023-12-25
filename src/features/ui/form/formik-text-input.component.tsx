'use client';

import { cn } from '@/lib/utils';
import { Field, FieldProps, GenericFieldHTMLAttributes } from 'formik';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { useId } from 'react';

type Props = InputTextProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
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
            className={`text-primary text-base font-medium leading-10`}
          >
            {label}
          </label>
        )}
        {requiredIcon && <label className="text-red-500">{requiredIcon}</label>}
      </div>
      <div>
        <InputText
          id={inputId}
          name={name}
          disabled={disabled}
          onFocus={(e) => e.target.select()}
          placeholder={placeholder}
          autoComplete="off"
          className={cn(
            'w-full',
            className
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

export function FormikTextField({
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
      }: FieldProps<string>) => (
        <TextField
          {...field}
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
