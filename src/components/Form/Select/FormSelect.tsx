import React from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Chip,
  Box,
} from "@mui/material";
import { OutlinedInput } from "@mui/material";

interface FormSelectProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label: string;
  options: { value: string; label: string }[];
  errorMessage?: string;
  multiple?: boolean; // Para seleccionar múltiples opciones
}

const FormSelectComponent: React.FC<FormSelectProps> = ({
  name,
  control,
  label,
  options,
  errorMessage,
  multiple = false,
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
            multiple={multiple}
            input={<OutlinedInput label={label} />}
            renderValue={(selected) => {
              if (Array.isArray(selected)) {
                return (
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={
                          options.find((option) => option.value === value)
                            ?.label
                        }
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                );
              }
              return selected;
            }}
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
