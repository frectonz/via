import { FunctionComponent } from "react";

import PathCardList from "../PathCardList";
import usePaths from "../../hooks/usePaths";
import { usePathSearchInputStore } from "../../hooks/usePathSearchInput";

const PathDisplayCard: FunctionComponent<{}> = () => {
  const { fromAddress, toAddress } = usePathSearchInputStore();
  const { data: paths } = usePaths(
    fromAddress?.name || "",
    toAddress?.name || ""
  );

  return <PathCardList paths={paths || []} />;
};

export default PathDisplayCard;
