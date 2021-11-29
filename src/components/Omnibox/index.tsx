import { FunctionComponent, useEffect } from "react";

import PathSearchInput from "./PathSearchInput";
import PathDisplayCard from "./PathDisplayCard";
import SearchAutoComplete from "./SearchAutoComplete";

import { useFullScreenMapDispatch } from "../../hooks/useFullScreenMap";
import { usePathSearchInputStore } from "../../hooks/usePathSearchInput";

const OmniBox: FunctionComponent<{}> = () => {
  const mapDispatch = useFullScreenMapDispatch();
  const { fromAddress, toAddress } = usePathSearchInputStore();

  useEffect(() => {
    if (fromAddress && toAddress) {
      mapDispatch({ type: "ADD_LINE", payload: [fromAddress, toAddress] });
    }

    return () => mapDispatch({ type: "CLEAR_LINES" });
  }, [fromAddress, toAddress]);

  return (
    <>
      <PathSearchInput />
      <SearchAutoComplete />
      <PathDisplayCard />
    </>
  );
};

export default OmniBox;
