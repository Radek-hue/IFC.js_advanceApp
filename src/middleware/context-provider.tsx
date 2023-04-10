import { FC, PropsWithChildren, useReducer, createContext, useContext } from "react";
import { reducer } from "./state-handler";
import { State, initialState } from "./state";
import { Action } from "./actions";
import { executeCore } from "./core-handler";
import { Authenticator } from "./autenticatory";



const appContext = createContext<[State, React.Dispatch<Action>]>([
    initialState,
    () => {},
])


export const ContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, setState] = useReducer(reducer, initialState);

    const dispatch = ( value: Action) => {
        setState(value);
        executeCore(value);
    };
    return(<appContext.Provider value={[state, dispatch]}>
        <Authenticator/>
            {children}
    </appContext.Provider>)
};

export const userAppContext = () => {
    return useContext(appContext);
}