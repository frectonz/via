import { RouteComponentProps } from "@reach/router";

import {
  List,
  Paper,
  Avatar,
  ListItem,
  ImageList,
  ListItemText,
  ImageListItem,
  ListItemAvatar,
} from "@mui/material";

import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from "@mui/lab";
import {
  LocationOn as DestLocationIcon,
  MyLocation as StartLocationIcon,
  AirportShuttleTwoTone as MiniBusIcon,
  DirectionsBusFilledTwoTone as BusIcon,
  DirectionsCarFilledTwoTone as LadaTaxiIcon,
} from "@mui/icons-material";

import usePath from "../hooks/usePath";
import { addPath } from "../api/searchedPaths";
import { useTextStore } from "../hooks/useText";

const PathPage = ({
  pathId,
}: RouteComponentProps<{
  pathId: string;
}>) => {
  const { data: path } = usePath(pathId || "");
  const { miniBusTaxiPrice, busPrice, ladaTaxiPrice } = useTextStore();

  if (path) {
    addPath(path);
  }

  if (!path) {
    return <></>;
  }

  return (
    <Paper sx={{ p: 1 }}>
      <ImageList cols={1}>
        {path.images &&
          path.images.map((p, i) => (
            <ImageListItem key={i}>
              <img src={p} />
            </ImageListItem>
          ))}
      </ImageList>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <StartLocationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{path.from.displayName}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <DestLocationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{path.to.displayName}</TimelineContent>
        </TimelineItem>
      </Timeline>

      <List>
        {path.minBusPrice && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MiniBusIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={miniBusTaxiPrice}
              primary={`${path.minBusPrice} Birr`}
            />
          </ListItem>
        )}

        {path.busPrice && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BusIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={busPrice}
              primary={`${path.busPrice} Birr`}
            />
          </ListItem>
        )}

        {path.ladaPrice && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LadaTaxiIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={ladaTaxiPrice}
              primary={`${path.ladaPrice} Birr`}
            />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};

export default PathPage;
