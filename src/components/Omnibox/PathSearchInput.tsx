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
import { useTextStore } from "../../hooks/useText";

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
  const { to, from } = usePathSearchInputStore();
  const { to: toString, from: fromString } = useTextStore();

  return (
    <Paper>
      <Box sx={boxStyle}>
        <StartLocationIcon color="primary" sx={iconStyle} />
        <InputBase
          value={from}
          sx={inputStyle}
          placeholder={fromString}
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
          value={to}
          sx={inputStyle}
          placeholder={toString}
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
