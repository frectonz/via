import { FunctionComponent } from "react";

import { PathCard } from "../PathCardList";
import usePaths from "../../hooks/usePaths";
import { usePathSearchInputStore } from "../../hooks/usePathSearchInput";
import { Box } from "@mui/material";

const PathDisplayCard: FunctionComponent<{}> = () => {
  const { fromAddress, toAddress } = usePathSearchInputStore();
  const { data: paths } = usePaths(
    fromAddress?.name || "",
    toAddress?.name || ""
  );

  if (!paths) {
    return <></>;
  }

  return (
    <Box sx={{ bgcolor: "whitesmoke", my: 2 }}>
      {paths.map((path, i) => (
        <PathCard key={i} path={path} />
      ))}
    </Box>
  );
};

export default PathDisplayCard;
