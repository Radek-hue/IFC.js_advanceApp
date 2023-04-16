import { State } from "../../../middleware/state";
import { Action } from "../../../middleware/actions";
import ListIcon from "@mui/icons-material/ViewList"
import { Tool } from "../../../types";
import MapIcon from "@mui/icons-material/Map"
import LogoutIcon from "@mui/icons-material/Logout"
import DeleteIcon from "@mui/icons-material/Delete"


export function getSidebarTools(
    state: State,
    dispatch: React.Dispatch<Action>,
    toogleMEnue: () => void
): Tool[]{
    return [
        {
            name: "Info",
            icon: <ListIcon />,
            action: () => {
                toogleMEnue();
            }
        },
        {
            name: "Back to map",
            icon: <MapIcon />,
            action: () => {
                dispatch({type: "CLOSE_BUILDING"});
            }
        },
        {
            name: "Log out",
            icon: <LogoutIcon />,
            action: () => {
                dispatch({type: "LOGOUT"});
            }
        },
        {
            name: "Delete bulding",
            icon: <DeleteIcon />,
            action: () => {
                dispatch({type: "DELETE_BUILDING", payload: state.building});
            }
        },
    ];
}