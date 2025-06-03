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
  const handleChange = (_: any, newValue: string[]) => {
    if (newValue.length <= 3) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <Autocomplete
        multiple
        options={opciones}
        value={value}
        onChange={handleChange}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="Temas de interés"
            placeholder="Selecciona máximo tres"
            error={error}
            helperText={helperText}
          />
        )}
      />
    </div>
  );
};

export default SelectMultivalor;
