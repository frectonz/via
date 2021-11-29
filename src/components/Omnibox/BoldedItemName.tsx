import { FunctionComponent } from "react";

interface BoldedItemNameProps {
  item: string;
  searchStr: string;
}

const BoldedItemName: FunctionComponent<BoldedItemNameProps> = ({
  item,
  searchStr,
}) => {
  return (
    <>
      {item
        .split("")
        .map((l, i) =>
          searchStr.toLowerCase().includes(l.toLowerCase()) ? (
            <b key={i}>{l}</b>
          ) : (
            <span key={i}>{l}</span>
          )
        )}
    </>
  );
};

export default BoldedItemName;
