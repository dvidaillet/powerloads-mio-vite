import React from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={t(label)}
          variant="outlined"
          fullWidth
          size="small"
          type={type}
          error={!!errorMessage}
          helperText={errorMessage}
        />
      )}
    />
  );
};

export default FormInputComponent;
