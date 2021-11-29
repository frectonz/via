import { FunctionComponent } from "react";

import { Card, Tooltip, CardActionArea } from "@mui/material";

interface TransportOptionProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}

const TransportOption: FunctionComponent<TransportOptionProps> = ({
  title,
  onClick,
  selected,
  children,
}) => {
  return (
    <Tooltip title={title}>
      <Card
        variant={"outlined"}
        sx={{ bgcolor: selected ? "rgba(87, 148, 240, 0.3)" : "whitesmoke" }}
      >
        <CardActionArea onClick={() => onClick()}>{children} </CardActionArea>
      </Card>
    </Tooltip>
  );
};

export default TransportOption;
