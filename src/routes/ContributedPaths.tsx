import { RouteComponentProps } from "@reach/router";

import { getPaths } from "../api/contributedPaths";
import PathCardList from "../components/PathCardList";

const ContributedPaths = (_: RouteComponentProps) => {
  const paths = getPaths();

  return (
    <>
      <h3>
        {paths.length === 0 ? "No Paths Contributed" : "Contributed Paths"}
      </h3>
      <PathCardList paths={paths} />
    </>
  );
};

export default ContributedPaths;
