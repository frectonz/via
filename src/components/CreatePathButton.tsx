import { FunctionComponent } from "react";

import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

import { navigate } from "@reach/router";

import { useTextStore } from "../hooks/useText";
import { useFullScreenMapDispatch } from "../hooks/useFullScreenMap";

const CreatePathButton: FunctionComponent<{}> = () => {
  const mapDispatch = useFullScreenMapDispatch();
  const { createNewPath } = useTextStore();

  return (
    <Tooltip placement="left" title={createNewPath}>
      <Fab
        size="large"
        color="primary"
        aria-label="create path"
        onClick={() => {
          navigate("/create-path");
          mapDispatch({
            type: "CLEAR",
          });
        }}
        sx={{ position: "fixed", bottom: 25, right: 10 }}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default CreatePathButton;
