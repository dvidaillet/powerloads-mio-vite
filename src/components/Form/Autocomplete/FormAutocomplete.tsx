import React from "react";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

interface FormAutocompleteProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label: string;
  options: { value: string; label: string }[];
  errorMessage?: string;
}

const FormAutocompleteComponent: React.FC<FormAutocompleteProps> = ({
  name,
  control,
  label,
  options,
  errorMessage,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={(option) => option.label}
          onChange={(_event, value) => {
            field.onChange(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              error={!!errorMessage}
              helperText={errorMessage}
            />
          )}
        />
      )}
    />
  );
};

export default FormAutocompleteComponent;
