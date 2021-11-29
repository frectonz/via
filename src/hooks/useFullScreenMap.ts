import makeStore from "../lib/store";
import Place from "../interfaces/Place";

interface State {
  places: Place[];
  lines: [Place, Place][];
}

type Action =
  | {
      type: "ADD_PLACE";
      payload: Place;
    }
  | {
      type: "ADD_LINE";
      payload: [Place, Place];
    }
  | {
      type: "CLEAR";
    }
  | {
      type: "CLEAR_LINES";
    };

const initial: State = {
  lines: [],
  places: [],
};

const {
  useStore: useFullScreenMapStore,
  StoreProvider: FullScreenMapProvider,
  useDispatch: useFullScreenMapDispatch,
} = makeStore<State, Action>(
  "places",
  (state, action) => {
    switch (action.type) {
      case "ADD_PLACE":
        return { ...state, places: [action.payload, ...state.places] };
      case "ADD_LINE":
        return { ...state, lines: [action.payload, ...state.lines] };
      case "CLEAR":
        return initial;
      case "CLEAR_LINES":
        return {
          ...state,
          lines: [],
        };
      default:
        return state;
    }
  },
  initial
);

export {
  useFullScreenMapStore,
  FullScreenMapProvider,
  useFullScreenMapDispatch,
};
