import { FunctionComponent } from "react";

import { Box, Button } from "@mui/material";

import submitPath from "../api/submitPath";
import { Path, useNewPathFormStore } from "../hooks/useNewPathForm";
import { addPath } from "../api/contributedPaths";

const validatePath = (path: Path) => {
  const addressExists = path.from && path.to;
  const atLeastOneTransportSelected =
    path.busPrice || path.ladaPrice || path.minBusPrice;
  const atLeastOneImage = path.images.length > 0;

  return addressExists && atLeastOneTransportSelected && atLeastOneImage
    ? true
    : false;
};

const FormSubmitButton: FunctionComponent<{}> = () => {
  const path = useNewPathFormStore();

  const handleSubmit = () => {
    const completed = validatePath(path);

    if (completed) {
      submitPath(path).then((savedPath) => {
        addPath(savedPath);
      });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default FormSubmitButton;
