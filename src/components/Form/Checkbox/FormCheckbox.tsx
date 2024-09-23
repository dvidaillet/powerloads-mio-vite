import React from "react";
import { Controller } from "react-hook-form";
import { FormControlLabel, Checkbox } from "@mui/material";

interface FormCheckboxProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label: string;
}

const FormCheckboxComponent: React.FC<FormCheckboxProps> = ({
  name,
  control,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          }
          label={label}
        />
      )}
    />
  );
};

export default FormCheckboxComponent;
