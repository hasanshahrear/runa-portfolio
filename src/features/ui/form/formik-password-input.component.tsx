'use client';

import { cn } from '@/lib/utils';
import { Field, FieldProps, GenericFieldHTMLAttributes } from 'formik';
import { InputTextProps } from 'primereact/inputtext';
import { KeyFilterType } from 'primereact/keyfilter';
import { Password } from 'primereact/password';
import { TooltipOptions } from 'primereact/tooltip/tooltipoptions';
import { useId } from 'react';

type Props = InputTextProps & {
  keyfilter?: KeyFilterType;
  size?: number;
  tooltip?: string;
  tooltipOptions?: TooltipOptions;
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
};

function PasswordField({
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
        {requiredIcon && <label className="text-red-500">{requiredIcon}</label>}
      </div>
      <div>
        <Password
          toggleMask
          id={inputId}
          name={name}
          disabled={disabled}
          onFocus={(e) => e.target.select()}
          placeholder={placeholder}
          className={cn('w-full', className)}
          pt={{
            input: {
              className:
                'h-[42px] rounded border border-outline shadow-none text-sm color-mainText w-full font-inter mt-2',
            },
          }}
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

export function FormikPasswordField({
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
        <PasswordField
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
