import { Router, LocationProvider } from "@reach/router";
import { SnackbarProvider } from "notistack";

import Main from "./components/Main";
import Header from "./components/Header";
import FullScreenMap from "./components/FullScreenMap/FullscreenMap";

import Home from "./routes/Home";
import PathPage from "./routes/PathPage";
import SearchedPaths from "./routes/SearchedPaths";
import CreatePathPage from "./routes/CreatePathPage";

import { TextProvider } from "./hooks/useText";
import { MenuProvider } from "./hooks/useMenu";
import { FullScreenMapProvider } from "./hooks/useFullScreenMap";

import getSession from "./api/session";
import ContributedPaths from "./routes/ContributedPaths";

getSession();

function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <TextProvider>
        <MenuProvider>
          <FullScreenMapProvider>
            <FullScreenMap />
            <Main>
              <LocationProvider>
                <Header />
              </LocationProvider>
              <Router>
                <Home path="/" />
                <PathPage path="/path/:pathId" />
                <CreatePathPage path="/create-path" />
                <SearchedPaths path="/searched-paths" />
                <ContributedPaths path="/contributed-paths" />
              </Router>
            </Main>
          </FullScreenMapProvider>
        </MenuProvider>
      </TextProvider>
    </SnackbarProvider>
  );
}

export default App;
