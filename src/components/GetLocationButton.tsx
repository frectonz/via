import { Fab } from "@mui/material";
import { FunctionComponent } from "react";

import { MyLocation as StartLocationIcon } from "@mui/icons-material";

import { useFullScreenMapDispatch } from "../hooks/useFullScreenMap";

const GetLocationButton: FunctionComponent<{}> = () => {
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
    <Fab
      size="large"
      onClick={handleChange}
      aria-label="get location"
      sx={{ position: "fixed", bottom: 100, right: 10 }}
    >
      <StartLocationIcon />
    </Fab>
  );
};

export default GetLocationButton;
