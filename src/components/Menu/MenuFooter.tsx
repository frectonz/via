import { FunctionComponent } from "react";

import { Box, Select, MenuItem, Typography } from "@mui/material";

const MenuFooter: FunctionComponent<{}> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "10px 22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography>Language</Typography>
      <Select label="Language" value="eng" size="small">
        <MenuItem value="amh">Amharic</MenuItem>
        <MenuItem value="eng">English</MenuItem>
      </Select>
    </Box>
  );
};

export default MenuFooter;
