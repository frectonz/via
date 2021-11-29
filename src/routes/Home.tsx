import { RouteComponentProps } from "@reach/router";

import Menu from "../components/Menu";
import OmniBox from "../components/Omnibox";
import CreatePathButton from "../components/CreatePathButton";
import GetLocationButton from "../components/GetLocationButton";

import { PathSearchInputProvider } from "../hooks/usePathSearchInput";

const Home = (_: RouteComponentProps) => {
  return (
    <PathSearchInputProvider>
      <Menu />
      <OmniBox />
      <CreatePathButton />
      <GetLocationButton />
    </PathSearchInputProvider>
  );
};

export default Home;
