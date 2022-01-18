import makeStore from "../lib/store";
import Place from "../interfaces/Place";

type Focused = "to" | "from" | "none";

interface State {
  to: string;
  from: string;
  focused: Focused;
  toInputCompleted: boolean;
  toAddress: Place | null;
  fromAddress: Place | null;
  fromInputCompleted: boolean;
}

type Action =
  | {
      type: "SET_TO";
      payload: string;
    }
  | {
      type: "SET_FROM";
      payload: string;
    }
  | {
      type: "SET_FOCUSED";
      payload: Focused;
    }
  | {
      type: "SET_TO_COMPLETED";
      payload: boolean;
    }
  | {
      type: "SET_FROM_COMPLETED";
      payload: boolean;
    }
  | {
      type: "SET_FROM_ADDRESS";
      payload: Place;
    }
  | {
      type: "SET_TO_ADDRESS";
      payload: Place;
    };

const initial: State = {
  to: "",
  from: "",
  focused: "none",
  toInputCompleted: false,
  toAddress: null,
  fromInputCompleted: false,
  fromAddress: null,
};

const {
  useStore: usePathSearchInputStore,
  StoreProvider: PathSearchInputProvider,
  useDispatch: usePathSearchInputDispatch,
} = makeStore<State, Action>(
  "pathSearchInput",
  (state, action) => {
    switch (action.type) {
      case "SET_TO":
        return { ...state, to: action.payload };
      case "SET_FROM":
        return { ...state, from: action.payload };
      case "SET_FOCUSED":
        return { ...state, focused: action.payload };
      case "SET_FROM_COMPLETED":
        return { ...state, fromInputCompleted: action.payload };
      case "SET_TO_COMPLETED":
        return { ...state, toInputCompleted: action.payload };
      case "SET_FROM_ADDRESS":
        return { ...state, fromAddress: action.payload };
      case "SET_TO_ADDRESS":
        return { ...state, toAddress: action.payload };
      default:
        return state;
    }
  },
  initial
);

export {
  usePathSearchInputStore,
  PathSearchInputProvider,
  usePathSearchInputDispatch,
};
