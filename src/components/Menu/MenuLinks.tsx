import { FunctionComponent } from "react";

import { navigate } from "@reach/router";

import {
  BookmarkBorder as PlacesIcon,
  RateReviewOutlined as ReviewIcon,
} from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { useTextStore } from "../../hooks/useText";

const MenuLinks: FunctionComponent<{}> = () => {
  const { contributedPaths, searchedPaths } = useTextStore();

  return (
    <List>
      <ListItem
        button
        onClick={() => {
          navigate("/searched-paths");
        }}
      >
        <ListItemIcon sx={{ justifyContent: "center" }}>
          <PlacesIcon />
        </ListItemIcon>
        <ListItemText primary={searchedPaths} />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          navigate("/contributed-paths");
        }}
      >
        <ListItemIcon sx={{ justifyContent: "center" }}>
          <ReviewIcon />
        </ListItemIcon>
        <ListItemText primary={contributedPaths} />
      </ListItem>
    </List>
  );
};

export default MenuLinks;
