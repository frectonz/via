import { FunctionComponent } from "react";

import { Box, useMediaQuery } from "@mui/material";

const Main: FunctionComponent<{}> = ({ children }) => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box top={10} left={10} position="absolute" width={matches ? "90vw" : 400}>
      {children}
    </Box>
  );
};

export default Main;
