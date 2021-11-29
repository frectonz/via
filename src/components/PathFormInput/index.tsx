import { FunctionComponent, useEffect } from "react";

interface PathFormInputProps {}

import { Stack } from "@mui/material";
import PlacesAutocomplete from "./PlacesAutocomplete";

import {
  useNewPathFormStore,
  useNewPathFormDispatch,
} from "../../hooks/useNewPathForm";
import { useFullScreenMapDispatch } from "../../hooks/useFullScreenMap";

const PathFormInput: FunctionComponent<PathFormInputProps> = () => {
  const dispatch = useNewPathFormDispatch();
  const { from, to } = useNewPathFormStore();

  const mapDispatch = useFullScreenMapDispatch();

  useEffect(() => {
    if (from && to) {
      mapDispatch({ type: "ADD_LINE", payload: [from, to] });
    }
    return () => mapDispatch({ type: "CLEAR_LINES" });
  }, [from, to]);

  return (
    <Stack spacing={2}>
      <PlacesAutocomplete
        place={from}
        setPlace={(p) => {
          dispatch({
            type: "SET_FROM",
            payload: p,
          });
        }}
        placeholder="From"
        helperText="Starting point"
      />

      <PlacesAutocomplete
        place={to}
        placeholder="To"
        setPlace={(p) => {
          dispatch({
            type: "SET_TO",
            payload: p,
          });
        }}
        helperText="Destination point"
      />
    </Stack>
  );
};

export default PathFormInput;
