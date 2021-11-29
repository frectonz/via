import { FunctionComponent } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { LocationOnOutlined as LocationIcon } from "@mui/icons-material";

import Place from "../../interfaces/Place";
import BoldedItemName from "./BoldedItemName";

import {
  usePathSearchInputStore,
  usePathSearchInputDispatch,
} from "../../hooks/usePathSearchInput";
import usePlaces from "../../hooks/usePlaces";
import { useFullScreenMapDispatch } from "../../hooks/useFullScreenMap";

const filterPlaces = (searchStr: string, places: Place[]) => {
  return places.filter(
    ({ displayName }) =>
      searchStr !== "" &&
      displayName.toLowerCase().includes(searchStr.toLowerCase())
  );
};

const SearchAutoComplete: FunctionComponent<{}> = () => {
  const dispatch = usePathSearchInputDispatch();
  const mapDispatch = useFullScreenMapDispatch();
  const { to, from, focused, toInputCompleted, fromInputCompleted } =
    usePathSearchInputStore();
  const { data: places, status } = usePlaces(focused === "from" ? from : to);

  if (focused === "none") {
    return <></>;
  }

  if (status === "loading") {
    return <></>;
  }

  const toPlaces = toInputCompleted ? [] : filterPlaces(to, places || []);
  const fromPlaces = fromInputCompleted ? [] : filterPlaces(from, places || []);

  const filteredPlaces = focused === "to" ? toPlaces : fromPlaces;

  if (filteredPlaces.length === 0) {
    return <></>;
  }

  const handleItemClick = (item: Place) => {
    if (focused === "from") {
      dispatch({ type: "SET_FROM", payload: item.displayName });
      dispatch({ type: "SET_FROM_COMPLETED", payload: true });
      dispatch({ type: "SET_FROM_ADDRESS", payload: item });
    } else if (focused === "to") {
      dispatch({ type: "SET_TO", payload: item.displayName });
      dispatch({ type: "SET_TO_COMPLETED", payload: true });
      dispatch({ type: "SET_TO_ADDRESS", payload: item });
    }
    mapDispatch({ type: "ADD_PLACE", payload: item });
  };

  return (
    <Box sx={{ mt: 1, bgcolor: "whitesmoke" }}>
      <List>
        {filteredPlaces.map((place, i) => {
          return (
            <ListItem disablePadding key={i}>
              <ListItemButton onClick={() => handleItemClick(place)}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <LocationIcon />
                </ListItemIcon>
                <ListItemText>
                  <BoldedItemName
                    item={place.displayName}
                    searchStr={focused === "from" ? from : to}
                  />
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default SearchAutoComplete;
