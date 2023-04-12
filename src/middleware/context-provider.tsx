import {
  FC,
  PropsWithChildren,
  useReducer,
  createContext,
  useContext,
} from "react";
import { reducer } from "./state-handler";
import { State, initialState } from "./state";
import { Action } from "./actions";
import { executeCore } from "./core-handler";
import { Authenticator } from "./autenticatory";
import { Events } from "./event-handler";

const appContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const events = new Events();
  events.on("OPEN_BUILDING", (building: string) => {
    setState({ type: "OPEN_BUILDING", payload: building });
  });

  const dispatch = (value: Action) => {
    setState(value);
    executeCore(value, events);
  };

  return (
    <appContext.Provider value={[state, dispatch]}>
      <Authenticator />
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
