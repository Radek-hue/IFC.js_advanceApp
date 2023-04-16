import { mapHandler } from "../core/map/map-handler";
import { databaseHandler } from "../core/db/db-handler"
import { Action } from "./actions"
import { Events } from "./event-handler";

export const executeCore = (action: Action, events: Events) => { 
    if(action.type === "LOGIN") {
        databaseHandler.Login(action);
    }
    if(action.type === "LOGOUT") {
        databaseHandler.logout();
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
    if(action.type === "DELETE_BUILDING") {
        databaseHandler.delateBuilding(action.payload, events);
    }
    if(action.type === "UPDATE_BUILDING") {
        databaseHandler.updateBuilding(action.payload);
    }
}