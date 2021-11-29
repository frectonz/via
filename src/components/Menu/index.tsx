import { FunctionComponent } from "react";

import { Box, Drawer, Divider, useMediaQuery } from "@mui/material";

import MenuLinks from "./MenuLinks";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";

import { useMenuStore, useMenuDispatch } from "../../hooks/useMenu";

const Menu: FunctionComponent<{}> = () => {
  const { menu } = useMenuStore();
  const dispatch = useMenuDispatch();
  const matches = useMediaQuery("(max-width:400px)");

  return (
    <Drawer
      open={menu}
      onClose={() => dispatch({ type: "SET_MENU", payload: false })}
    >
      <Box
        sx={{
          width: matches ? "100vw" : 320,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box width="100%">
          <MenuHeader />
          <Divider />
          <MenuLinks />
        </Box>
        <Box>
          <Divider />
          <MenuFooter />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Menu;
