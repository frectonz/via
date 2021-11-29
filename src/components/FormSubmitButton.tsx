import { FunctionComponent } from "react";

import { Box, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { navigate } from "@reach/router";

import submitPath from "../api/submitPath";
import { addPath } from "../api/contributedPaths";

import { useTextStore } from "../hooks/useText";
import { Path, useNewPathFormStore } from "../hooks/useNewPathForm";

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
  const { submitText, successfullySubmittedPath } = useTextStore();
  const path = useNewPathFormStore();
  const { enqueueSnackbar } = useSnackbar();

  const completed = validatePath(path);
  const handleSubmit = () => {
    if (completed) {
      navigate("/");
      submitPath(path).then((savedPath) => {
        addPath(savedPath);
        enqueueSnackbar(successfullySubmittedPath, {
          variant: "success",
        });
      });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="submit" onClick={handleSubmit} disabled={!completed}>
        {submitText}
      </Button>
    </Box>
  );
};

export default FormSubmitButton;
