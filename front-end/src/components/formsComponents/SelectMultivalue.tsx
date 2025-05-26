import { Autocomplete, TextField } from "@mui/material";

interface SelectMultivalorProps {
  opciones: string[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: boolean;
  helperText?: string;
}

const SelectMultivalor: React.FC<SelectMultivalorProps> = ({
  opciones,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <div>
      <Autocomplete
        multiple
        options={opciones}
        value={value}
        onChange={(_, newValue) => onChange(newValue)}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="Temas de interés"
            placeholder="Selecciona varios"
            error={error}
            helperText={helperText}
          />
        )}
      />
    </div>
  );
};

export default SelectMultivalor;
