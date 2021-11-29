import { FunctionComponent } from "react";

import via from "../../via.svg";

import { Box, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import { useMenuDispatch } from "../../hooks/useMenu";

const MenuHeader: FunctionComponent<{}> = () => {
  const dispatch = useMenuDispatch();

  return (
    <Box
      sx={{
        p: "10px 22px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        src={via}
        style={{
          width: 80,
        }}
      />
      <IconButton
        onClick={() => dispatch({ type: "SET_MENU", payload: false })}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default MenuHeader;
