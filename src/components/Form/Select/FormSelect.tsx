import React from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { OutlinedInput } from "@mui/material";

interface FormSelectProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any; // Usa el tipo correcto en lugar de `any`
  label: string;
  options: { value: string; label: string }[];
  errorMessage?: string;
}

const FormSelectComponent: React.FC<FormSelectProps> = ({
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
        <FormControl fullWidth error={!!errorMessage}>
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            label={label}
            size="small"
            value={field.value || ""} // Asegúrate de que sea un string
            input={<OutlinedInput sx={{ marginTop: 1 }} label={label} />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 48 * 4.5 + 8, // Ajusta la altura del menú
                  width: 250,
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default FormSelectComponent;
