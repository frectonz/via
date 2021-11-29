import { FunctionComponent, useState } from "react";

import { Box, Stack, FormControl, FormHelperText } from "@mui/material";
import {
  AirportShuttleTwoTone as MiniBusIcon,
  DirectionsBusFilledTwoTone as BusIcon,
  DirectionsCarFilledTwoTone as LadaTaxiIcon,
} from "@mui/icons-material";
import { SxProps } from "@mui/system";

import PriceInput from "./PriceInput";
import TransportOption from "./TransportOption";

const iconStyle: SxProps = { fontSize: "4rem" };

type SelectedTransport = {
  ladaSelected: boolean;
  minibusSelected: boolean;
  busSelected: boolean;
};

import {
  useNewPathFormStore,
  useNewPathFormDispatch,
} from "../../hooks/useNewPathForm";

const TransportSelect: FunctionComponent<{}> = () => {
  const [selected, setSelected] = useState<SelectedTransport>({
    busSelected: false,
    ladaSelected: false,
    minibusSelected: false,
  });

  const dispatch = useNewPathFormDispatch();
  const { busPrice, ladaPrice, minBusPrice } = useNewPathFormStore();

  return (
    <Box mt={2}>
      <FormControl sx={{ my: 1 }}>
        <Stack direction="row" spacing={2}>
          <TransportOption
            title="Lada Taxi"
            selected={selected.ladaSelected}
            onClick={() => {
              selected.ladaSelected &&
                dispatch({ type: "SET_LADA", payload: "" });
              setSelected({
                ...selected,
                ladaSelected: !selected.ladaSelected,
              });
            }}
          >
            <LadaTaxiIcon sx={iconStyle} />
          </TransportOption>

          <TransportOption
            title="Bus"
            selected={selected.busSelected}
            onClick={() => {
              selected.busSelected &&
                dispatch({ type: "SET_BUS", payload: "" });
              setSelected({ ...selected, busSelected: !selected.busSelected });
            }}
          >
            <BusIcon sx={iconStyle} />
          </TransportOption>

          <TransportOption
            title="Minibus Taxi"
            selected={selected.minibusSelected}
            onClick={() => {
              selected.minibusSelected &&
                dispatch({ type: "SET_MINIBUS", payload: "" });
              setSelected({
                ...selected,
                minibusSelected: !selected.minibusSelected,
              });
            }}
          >
            <MiniBusIcon sx={iconStyle} />
          </TransportOption>
        </Stack>
        <FormHelperText>Select the transportation type</FormHelperText>
      </FormControl>

      <>
        {selected.ladaSelected && (
          <PriceInput
            value={ladaPrice}
            onChange={(newValue) =>
              dispatch({ type: "SET_LADA", payload: newValue })
            }
            label="Lada Fare"
          />
        )}
        {selected.busSelected && (
          <PriceInput
            value={busPrice}
            onChange={(newValue) =>
              dispatch({ type: "SET_BUS", payload: newValue })
            }
            label="Bus Fare"
          />
        )}
        {selected.minibusSelected && (
          <PriceInput
            value={minBusPrice}
            onChange={(newValue) =>
              dispatch({ type: "SET_MINIBUS", payload: newValue })
            }
            label="Mini Bus Fare"
          />
        )}
      </>
    </Box>
  );
};

export default TransportSelect;
