import { RouteComponentProps } from "@reach/router";

import { useTextStore } from "../hooks/useText";
import { getPaths } from "../api/searchedPaths";
import PathCardList from "../components/PathCardList";

const SearchedPaths = (_: RouteComponentProps) => {
  const paths = getPaths();
  const { searchedPaths, noPathsSearched } = useTextStore();

  return (
    <>
      <h3>{paths.length === 0 ? noPathsSearched : searchedPaths}</h3>
      <PathCardList paths={paths} />
    </>
  );
};

export default SearchedPaths;
