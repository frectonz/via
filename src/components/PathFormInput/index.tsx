import { FunctionComponent, useEffect } from "react";

interface PathFormInputProps {}

import { Stack } from "@mui/material";
import PlacesAutocomplete from "./PlacesAutocomplete";

import {
  useNewPathFormStore,
  useNewPathFormDispatch,
} from "../../hooks/useNewPathForm";
import { useTextStore } from "../../hooks/useText";
import { useFullScreenMapDispatch } from "../../hooks/useFullScreenMap";

const PathFormInput: FunctionComponent<PathFormInputProps> = () => {
  const dispatch = useNewPathFormDispatch();
  const { from, to } = useNewPathFormStore();
  const {
    from: fromStr,
    to: toStr,
    startingPoint,
    destinationPoint,
  } = useTextStore();

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
        placeholder={fromStr}
        helperText={startingPoint}
      />

      <PlacesAutocomplete
        place={to}
        setPlace={(p) => {
          dispatch({
            type: "SET_TO",
            payload: p,
          });
        }}
        placeholder={toStr}
        helperText={destinationPoint}
      />
    </Stack>
  );
};

export default PathFormInput;
