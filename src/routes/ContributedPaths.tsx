import { RouteComponentProps } from "@reach/router";

import { getPaths } from "../api/contributedPaths";
import PathCardList from "../components/PathCardList";

const ContributedPaths = (_: RouteComponentProps) => {
  const paths = getPaths();

  return (
    <>
      <h3>Contributed Paths</h3>
      <PathCardList paths={paths} />
    </>
  );
};

export default ContributedPaths;
