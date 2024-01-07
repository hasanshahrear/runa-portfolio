import { useFormikContext } from "formik";
import { Button, ButtonProps } from "primereact/button";
import { CgSpinner } from "react-icons/cg";

export function FormikSubmitButton({
  type = "submit",
  disabled,
  outlined,
  className,
  loadingIcon = <CgSpinner className="icon-spin mr-1" />,
  ...rest
}: ButtonProps) {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      type={type}
      disabled={disabled || isSubmitting}
      loading={isSubmitting}
      loadingIcon={loadingIcon}
      pt={{
        root: {
          className: "btn-primary w-fit font-medium",
        },
      }}
      {...rest}
    />
  );
}
