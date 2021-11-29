import { Fab, Tooltip } from "@mui/material";
import { FunctionComponent } from "react";

import { MyLocation as StartLocationIcon } from "@mui/icons-material";

import { useTextStore } from "../hooks/useText";
import { useFullScreenMapDispatch } from "../hooks/useFullScreenMap";

const GetLocationButton: FunctionComponent<{}> = () => {
  const { showCurrentLocation } = useTextStore();
  const dispatch = useFullScreenMapDispatch();

  const handleChange = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
        type: "ADD_PLACE",
        payload: {
          id: `${Math.round(Math.random() * 100)}`,
          name: "Your Location",
          displayName: "Your Location",
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
      });
    });
  };

  return (
    <Tooltip placement="left" title={showCurrentLocation}>
      <Fab
        size="large"
        onClick={handleChange}
        aria-label="get location"
        sx={{ position: "fixed", bottom: 100, right: 10 }}
      >
        <StartLocationIcon />
      </Fab>
    </Tooltip>
  );
};

export default GetLocationButton;
