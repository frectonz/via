import makeStore from "../lib/store";

interface State {
  to: string;
  from: string;
  language: string;
  searchedPaths: string;
  createNewPath: string;
  contributedPaths: string;

  startingPoint: string;
  destinationPoint: string;

  bus: string;
  ladaTaxi: string;
  miniBusTaxi: string;

  selectTransportationType: string;

  busPrice: string;
  ladaTaxiPrice: string;
  miniBusTaxiPrice: string;

  inputImages: string;

  submitText: string;

  showCurrentLocation: string;

  noPathsSearched: string;
  noPathsContributed: string;

  viewPath: string;
}

export type Lang = "AMH" | "ENG";

type Action = {
  type: "CHANGE_LANG";
  payload: Lang;
};

const english: State = {
  to: "To",
  from: "From",
  language: "Language",
  searchedPaths: "Searched Paths",
  createNewPath: "Create New Path",
  contributedPaths: "Your Contributions",
  startingPoint: "Starting Point",
  destinationPoint: "Destination Point",
  bus: "Bus",
  ladaTaxi: "Lada Taxi",
  miniBusTaxi: "Minibus Taxi",
  selectTransportationType: "Select Transportation Type",
  busPrice: "Bus Price",
  ladaTaxiPrice: "Lada Taxi Price",
  miniBusTaxiPrice: "Minibus Taxi Price",
  inputImages: "Images",
  submitText: "Submit",
  showCurrentLocation: "Show Current Location",
  noPathsSearched: "No Paths Searched",
  noPathsContributed: "No Paths Contributed",
  viewPath: "View Path",
};

const amharic: State = {
  to: "ወዴት",
  from: "ከየት",
  language: "ቋንቋ",
  searchedPaths: "የተመዘገቡ መንገዶች",
  createNewPath: "አዲስ መንገድ",
  contributedPaths: "የእርሶ አስተዋጽኦዎች",
  startingPoint: "መነሻ ቦታ",
  destinationPoint: "መድረሻ ቦታ",
  bus: "ባስ",
  ladaTaxi: "ላዳ",
  miniBusTaxi: "ታክሲ",
  selectTransportationType: "ትራንስፖርቶን ይምረጡ",
  busPrice: "የባስ ክፍያ",
  ladaTaxiPrice: "የላዳ ክፍያ",
  miniBusTaxiPrice: "የታክሲ ክፍያ",
  inputImages: "ምስሎች",
  submitText: "መዝግብ",
  showCurrentLocation: "እርሶ ያሉበት ቦታ",
  noPathsSearched: "ምንም መንገዶች አልተመዘገቡም",
  noPathsContributed: "ምንም አስተዋጽኦ አላደረጉም",
  viewPath: "መንገዱን ይመልከቱ",
};

const {
  useStore: useTextStore,
  StoreProvider: TextProvider,
  useDispatch: useTextDispatch,
} = makeStore<State, Action>(
  "text",
  (_, action) => {
    switch (action.type) {
      case "CHANGE_LANG":
        if (action.payload === "AMH") {
          return amharic;
        } else {
          return english;
        }
      default:
        return amharic;
    }
  },
  amharic
);

export { useTextStore, useTextDispatch, TextProvider };
