import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface FormInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label: string;
  type?: string;
  errorMessage?: string;
  defaultValue?: string;
}

const FormInputComponent: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  type = "text",
  errorMessage,
  defaultValue = "",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          type={type}
          error={!!errorMessage}
          helperText={errorMessage}
        />
      )}
    />
  );
};

export default FormInputComponent;
