import { mapHandler } from "../core/map/map-handler";
import { userAuth } from "../core/user/user-auth"
import { Action } from "./actions"
import { Events } from "./event-handler";

export const executeCore = (action: Action, events: Events) => { 
    if(action.type === "LOGIN") {
        userAuth.Login(action);
    }
    if(action.type === "LOGOUT") {
        userAuth.logout();
    }
    if(action.type === "START_MAP") {
        const {user, container} = action.payload
        mapHandler.start(container, user, events);
    }
    if(action.type === "REMOVE_MAP") {
       return mapHandler.remove();
    }
    if(action.type === "ADD_BUILDING") {
       return mapHandler.addBuilding(action.payload);
    }
}