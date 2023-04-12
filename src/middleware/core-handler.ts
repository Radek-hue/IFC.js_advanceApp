import { mapHandler } from "../core/map/map-handler";
import { userAuth } from "../core/user/user-auth"
import { Action } from "./actions"

export const executeCore = (action: Action) => { 
    if(action.type === "LOGIN") {
        userAuth.Login(action);
    }
    if(action.type === "LOGOUT") {
        userAuth.logout();
    }
    if(action.type === "START_MAP") {
        const {user, container} = action.payload
        mapHandler.start(container, user);
    }
    if(action.type === "REMOVE_MAP") {
       return mapHandler.remove();
    }
    if(action.type === "ADD_BUILDING") {
       return mapHandler.addBuilding(action.payload);
    }
}