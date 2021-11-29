import makeStore from "../lib/store";
import Place from "../interfaces/Place";

export interface Path {
  to: Place | null;
  from: Place | null;
  minBusPrice: string;
  ladaPrice: string;
  busPrice: string;
  images: string[];
}

type Action =
  | {
      type: "SET_FROM";
      payload: Place | null;
    }
  | {
      type: "SET_TO";
      payload: Place | null;
    }
  | {
      type: "SET_MINIBUS";
      payload: string;
    }
  | {
      type: "SET_LADA";
      payload: string;
    }
  | {
      type: "SET_BUS";
      payload: string;
    }
  | {
      type: "ADD_IMAGE";
      payload: string;
    }
  | {
      type: "REMOVE_IMAGE";
      payload: number;
    };

const initial: Path = {
  to: null,
  from: null,
  images: [],
  busPrice: "",
  ladaPrice: "",
  minBusPrice: "",
};

const {
  useStore: useNewPathFormStore,
  useDispatch: useNewPathFormDispatch,
  StoreProvider: NewPathFormStoreProvider,
} = makeStore<Path, Action>(
  "newPathForm",
  (state, action) => {
    switch (action.type) {
      case "SET_FROM":
        return { ...state, from: action.payload };
      case "SET_TO":
        return { ...state, to: action.payload };
      case "SET_MINIBUS":
        return { ...state, minBusPrice: action.payload };
      case "SET_BUS":
        return { ...state, busPrice: action.payload };
      case "SET_LADA":
        return { ...state, ladaPrice: action.payload };
      case "ADD_IMAGE":
        return { ...state, images: [action.payload, ...state.images] };
      case "REMOVE_IMAGE":
        return {
          ...state,
          images: [...state.images.filter((_, i) => i !== action.payload)],
        };
      default:
        return state;
    }
  },
  initial
);

export {
  useNewPathFormStore,
  useNewPathFormDispatch,
  NewPathFormStoreProvider,
};
