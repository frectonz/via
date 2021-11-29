import { RouteComponentProps } from "@reach/router";

import { getPaths } from "../api/searchedPaths";
import PathCardList from "../components/PathCardList";

const SearchedPaths = (_: RouteComponentProps) => {
  const paths = getPaths();

  return (
    <>
      <h3>{paths.length === 0 ? "No Paths Searched" : "Searched Paths"}</h3>

      <PathCardList paths={paths} />
    </>
  );
};

export default SearchedPaths;
