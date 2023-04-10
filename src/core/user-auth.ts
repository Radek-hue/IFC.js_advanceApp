import { Action } from "../middleware/actions";

export const userAuth = {
    Login: (action: Action) => {
        const name = action.payload.displayName;
        if(name) {
            console.log(`User ${name} logged`)
        }
    }
}