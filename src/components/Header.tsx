import { FunctionComponent } from "react";

import { IconButton, Paper } from "@mui/material";
import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";

import via from "../via.svg";
import { navigate, useLocation } from "@reach/router";

import { useMenuDispatch } from "../hooks/useMenu";
import { useFullScreenMapDispatch } from "../hooks/useFullScreenMap";

const Header: FunctionComponent<{}> = () => {
  const { pathname } = useLocation();
  const mapDispatch = useFullScreenMapDispatch();
  const dispatch = useMenuDispatch();

  return (
    <Paper
      sx={{
        mb: 2,
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {pathname === "/" && (
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={() =>
            dispatch({
              type: "SET_MENU",
              payload: true,
            })
          }
        >
          <MenuIcon />
        </IconButton>
      )}
      {pathname !== "/" && (
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={() => {
            navigate("/");
            mapDispatch({ type: "CLEAR" });
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <img
        src={via}
        style={{
          width: 80,
        }}
      />
    </Paper>
  );
};

export default Header;
