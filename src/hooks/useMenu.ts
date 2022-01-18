import makeStore from "../lib/store";

interface State {
  menu: boolean;
}

type Action = {
  type: "SET_MENU";
  payload: boolean;
};

const initial: State = {
  menu: false,
};

const {
  useStore: useMenuStore,
  StoreProvider: MenuProvider,
  useDispatch: useMenuDispatch,
} = makeStore<State, Action>(
  "menu",
  (state, action) => {
    switch (action.type) {
      case "SET_MENU":
        return {
          ...state,
          menu: action.payload,
        };
      default:
        return state;
    }
  },
  initial
);

export { useMenuStore, useMenuDispatch, MenuProvider };
