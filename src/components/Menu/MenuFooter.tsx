import { FunctionComponent, useEffect, useState } from "react";

import { Box, Select, MenuItem, Typography } from "@mui/material";

import { Lang, useTextStore, useTextDispatch } from "../../hooks/useText";

const MenuFooter: FunctionComponent<{}> = () => {
  const { language } = useTextStore();
  const [lang, setLang] = useState<Lang>("AMH");
  const dispatch = useTextDispatch();

  useEffect(() => {
    dispatch({
      payload: lang,
      type: "CHANGE_LANG",
    });
  }, [lang]);

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
        onChange={(e) => setLang(e.target.value as Lang)}
      >
        <MenuItem value="AMH">Amharic</MenuItem>
        <MenuItem value="ENG">English</MenuItem>
      </Select>
    </Box>
  );
};

export default MenuFooter;
