import { Field, FieldProps, GenericFieldHTMLAttributes } from 'formik';
import { Calendar, CalendarProps } from 'primereact/calendar';
import { useId } from 'react';

type CalenderFieldProps = CalendarProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
};

function DateField({
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
}: CalenderFieldProps) {
  const generatedID = useId();
  const inputId = id || generatedID;

  return (
    <div className="w-full">
      <div>
        {label && <label htmlFor={inputId}>{label}</label>}
        {requiredIcon && <label className="text-red-500">{requiredIcon}</label>}
      </div>

      <Calendar
        id={inputId}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />

      {error && <small className={'p-error'}>{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </div>
  );
}

type FormikDateFieldProps = GenericFieldHTMLAttributes & {
  apiError?: string;
  props?: CalenderFieldProps;
};

export function FormikDateField({
  props,
  apiError,
  disabled,
  ...rest
}: FormikDateFieldProps) {
  return (
    <Field {...rest}>
      {({
        field,
        meta: { touched, error },
        form: { isSubmitting },
      }: FieldProps) => (
        <DateField
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
