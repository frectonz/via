import { RouteComponentProps } from "@reach/router";

import { useTextStore } from "../hooks/useText";
import { getPaths } from "../api/contributedPaths";
import PathCardList from "../components/PathCardList";

const ContributedPaths = (_: RouteComponentProps) => {
  const paths = getPaths();

  const { contributedPaths, noPathsContributed } = useTextStore();

  return (
    <>
      <h3>{paths.length === 0 ? noPathsContributed : contributedPaths}</h3>
      <PathCardList paths={paths} />
    </>
  );
};

export default ContributedPaths;
