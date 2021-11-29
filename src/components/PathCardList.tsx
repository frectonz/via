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

const boxStyle: SxProps = {
  display: "flex",
  alignItems: "center",
};
const iconStyle: SxProps = { p: "10px", fontSize: "3rem", color: "gray" };

interface PathCardListProps {
  paths: Path[];
}

const PathCardList: FunctionComponent<PathCardListProps> = ({ paths }) => {
  const { viewPath } = useTextStore();

  return (
    <Box sx={{ bgcolor: "whitesmoke", my: 2 }}>
      {paths.map((path, i) => (
        <Card key={i}>
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
            <Button
              color="primary"
              onClick={() => navigate(`/path/${path._id}`)}
            >
              {viewPath}
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default PathCardList;
