import { FunctionComponent } from "react";

import {
  Box,
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
} from "@mui/material";
import {
  LocationOn as DestLocationIcon,
  MyLocation as StartLocationIcon,
} from "@mui/icons-material";
import { SxProps } from "@mui/system";

import Path from "../api/Path";
import { useTextStore } from "../hooks/useText";
import { navigate } from "@reach/router";
import usePath from "../hooks/usePath";

const boxStyle: SxProps = {
  display: "flex",
  alignItems: "center",
};
const iconStyle: SxProps = { p: "10px", fontSize: "3rem", color: "gray" };

interface PathCardListProps {
  paths: string[];
}

const PathCardList: FunctionComponent<PathCardListProps> = ({ paths }) => {
  return (
    <Box sx={{ bgcolor: "whitesmoke", my: 2 }}>
      {paths.map((path, i) => (
        <PathCardFromId key={i} pathId={path} />
      ))}
    </Box>
  );
};

const PathCardFromId: FunctionComponent<{ pathId: string }> = ({ pathId }) => {
  const { data: path } = usePath(pathId);

  if (!path) {
    return <></>;
  }

  return <PathCard path={path} />;
};

export const PathCard: FunctionComponent<{ path: Path }> = ({ path }) => {
  const { viewPath } = useTextStore();

  return (
    <Card>
      {path.images.length > 0 && (
        <CardMedia component="img" height="150" src={path.images[0]} />
      )}
      <CardContent>
        <Box sx={boxStyle}>
          <StartLocationIcon sx={iconStyle} />
          <Typography>{path.from?.displayName}</Typography>
        </Box>
        <Box sx={boxStyle}>
          <DestLocationIcon sx={iconStyle} />
          <Typography>{path.to?.displayName}</Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button color="primary" onClick={() => navigate(`/path/${path._id}`)}>
          {viewPath}
        </Button>
      </CardActions>
    </Card>
  );
};
export default PathCardList;
