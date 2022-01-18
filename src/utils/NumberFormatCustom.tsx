import { forwardRef } from "react";
import NumberFormat from "react-number-format";

interface CustomProps {
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
}

const NumberFormatCustom = forwardRef<NumberFormat, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        isNumericString
        thousandSeparator
        min={0}
      />
    );
  }
);

export default NumberFormatCustom;
