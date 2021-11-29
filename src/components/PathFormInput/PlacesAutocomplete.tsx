import { FunctionComponent, useState } from "react";

import { Autocomplete, TextField } from "@mui/material";

import Place from "../../interfaces/Place";
import usePlaces from "../../hooks/usePlaces";
import { useFullScreenMapDispatch } from "../../hooks/useFullScreenMap";

interface PlacesAutocompleteProps {
  placeholder: string;
  helperText: string;
  place: Place | null;
  setPlace: (place: Place | null) => void;
}

const PlacesAutocomplete: FunctionComponent<PlacesAutocompleteProps> = ({
  place,
  setPlace,
  helperText,
  placeholder,
}) => {
  const [value, setValue] = useState("");
  const { data: places } = usePlaces(value);

  const mapDispatch = useFullScreenMapDispatch();

  return (
    <Autocomplete
      disablePortal
      value={place}
      onChange={(_, value) => {
        setPlace(value);
        value && mapDispatch({ type: "ADD_PLACE", payload: value });
      }}
      options={places || []}
      noOptionsText="Loading.."
      getOptionLabel={(p) => p.displayName}
      renderInput={(params) => (
        <TextField
          {...params}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={helperText}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default PlacesAutocomplete;
