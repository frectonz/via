import { FunctionComponent } from "react";

import NumberFormatCustom from "../../utils/NumberFormatCustom";

import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

interface PriceInputProps {
  value: string;
  label: string;
  onChange: (newValue: string) => void;
}

const PriceInput: FunctionComponent<PriceInputProps> = ({
  value,
  label,
  onChange,
}) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <OutlinedInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputComponent={NumberFormatCustom as any}
        endAdornment={<InputAdornment position="end">Birr</InputAdornment>}
      />
      <FormHelperText>{label}</FormHelperText>
    </FormControl>
  );
};

export default PriceInput;
