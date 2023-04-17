export const ActionList =[
   "LOGIN",
 "LOGOUT",
 "START_MAP", 
 'REMOVE_MAP', 
 "OPEN_BUILDING", 
 "UPDATE_USER" ,
 "ADD_BUILDING",
 "CLOSE_BUILDING",
 "UPDATE_BUILDING",
 "DELETE_BUILDING", 
 "UPLOAD_MODEL",
 "DELELETE_MODEL",
 "START_BUILDING",
 "CLOSE_BUILDING"
] as const

type ActionListType = typeof ActionList;
export type ActionType = ActionListType[number]

export interface Action {
    type: ActionType;
    payload?: any;
}