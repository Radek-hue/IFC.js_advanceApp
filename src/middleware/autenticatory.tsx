import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, useEffect } from "react";
import { userAppContext } from "./context-provider";

let authoInitialized = false;

export const Authenticator: FC = () => {
    const auth = getAuth();
    const dispatch = userAppContext()[1];

    const listenToAuthChanges = () => {
        onAuthStateChanged(auth, (foundUser) => {
            const user = foundUser ? {...foundUser} : null;
            dispatch({type: "UPDATE_USER", payload: user});
        });
    };

    useEffect(() =>{
        if(!authoInitialized) {
            listenToAuthChanges();
            authoInitialized = true;
        }
    },[]); 

    return<></>
};