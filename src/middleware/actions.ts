export type ActionType = "LOGIN" 
| "LOGOUT" 
| "START_MAP" 
| 'REMOVE_MAP' 
| "OPEN_BUILDING" 
| "UPDATE_USER" 
| "ADD_BUILDING"
| "CLOSE_BUILDING"

export interface Action {
    type: ActionType;
    payload?: any;
}