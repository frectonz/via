import { FunctionComponent } from "react";

import {
  LocationOn as DestLocationIcon,
  MyLocation as StartLocationIcon,
} from "@mui/icons-material";
import { SxProps } from "@mui/system";
import { Paper, InputBase, Box } from "@mui/material";

import {
  usePathSearchInputStore,
  usePathSearchInputDispatch,
} from "../../hooks/usePathSearchInput";
import { useFullScreenMapDispatch } from "../../hooks/useFullScreenMap";

const boxStyle: SxProps = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
};

const inputStyle: SxProps = {
  ml: 1,
  flex: 1,
};

const iconStyle: SxProps = { p: "10px", fontSize: "3rem" };

const PathSearchInput: FunctionComponent<{}> = () => {
  const dispatch = usePathSearchInputDispatch();
  const { to, from, focused } = usePathSearchInputStore();

  return (
    <Paper>
      <Box sx={boxStyle}>
        <StartLocationIcon color="primary" sx={iconStyle} />
        <InputBase
          sx={inputStyle}
          placeholder="From"
          inputProps={{ "aria-label": "from address" }}
          value={from}
          onChange={(e) => {
            dispatch({
              type: "SET_FROM",
              payload: e.target.value,
            });
          }}
          onFocus={() => {
            dispatch({ type: "SET_FOCUSED", payload: "from" });
            dispatch({ type: "SET_FROM_COMPLETED", payload: false });
          }}
        />
      </Box>

      <Box sx={boxStyle}>
        <DestLocationIcon color="primary" sx={iconStyle} />
        <InputBase
          sx={inputStyle}
          placeholder="To"
          inputProps={{ "aria-label": "to address" }}
          value={to}
          onChange={(e) => {
            dispatch({
              type: "SET_TO",
              payload: e.target.value,
            });
          }}
          onFocus={() => {
            dispatch({ type: "SET_FOCUSED", payload: "to" });
            dispatch({ type: "SET_TO_COMPLETED", payload: false });
          }}
        />
      </Box>
    </Paper>
  );
};

export default PathSearchInput;
