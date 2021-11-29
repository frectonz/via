/* eslint-disable react/require-default-props */
import {
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  createContext,
} from "react";

export interface StoreProviderProps {
  children?: ReactNode;
}

type UseStore<State> = () => State;
type UseDispatch<Action> = () => Dispatch<Action>;
type StoreProvider = (props: StoreProviderProps) => JSX.Element;

export type Reducer<State, Action> = (state: State, action: Action) => State;

type StoreResult<State, Action> = {
  StoreProvider: StoreProvider;
  useStore: UseStore<State>;
  useDispatch: UseDispatch<Action>;
};

export default function makeStore<State, Action>(
  name: string,
  userReducer: Reducer<State, Action>,
  initialState: State
): StoreResult<State, Action> {
  const stringified = localStorage.getItem(name);
  const initial = stringified
    ? (JSON.parse(stringified) as State)
    : initialState;

  const StoreContext = createContext(initial);
  const DispatchContext = createContext<Dispatch<Action>>(() => {});

  const reducer = (state: State, action: Action) => {
    const newState = userReducer(state, action);
    localStorage.setItem(name, JSON.stringify(newState));
    return newState;
  };

  function StoreProvider({ children }: StoreProviderProps) {
    const [store, dispatch] = useReducer<Reducer<State, Action>>(
      reducer,
      initial
    );

    return (
      <StoreContext.Provider value={store}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StoreContext.Provider>
    );
  }

  function useStore(): State {
    return useContext(StoreContext);
  }

  function useDispatch(): Dispatch<Action> {
    return useContext<Dispatch<Action>>(DispatchContext);
  }

  return { StoreProvider, useDispatch, useStore };
}
