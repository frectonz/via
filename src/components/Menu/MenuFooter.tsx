import { FunctionComponent } from "react";

import { Box, Select, MenuItem, Typography } from "@mui/material";

import { Lang, useTextStore, useTextDispatch } from "../../hooks/useText";

const MenuFooter: FunctionComponent<{}> = () => {
  const { language, lang } = useTextStore();
  const dispatch = useTextDispatch();

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
      <Typography>{language}</Typography>
      <Select
        value={lang}
        size="small"
        label="Language"
        onChange={(e) =>
          dispatch({
            type: "CHANGE_LANG",
            payload: e.target.value as Lang,
          })
        }
      >
        <MenuItem value="AMH">አማርኛ</MenuItem>
        <MenuItem value="ENG">English</MenuItem>
      </Select>
    </Box>
  );
};

export default MenuFooter;
