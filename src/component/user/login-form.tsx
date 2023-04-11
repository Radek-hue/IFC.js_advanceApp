import { FC } from "react";
import { getApp } from "firebase/app";
import { UserAppContext } from "../../middleware/context-provider";
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";

export const LoginForm: FC = () => {
    
    const [state, dispatch] = UserAppContext();

    const onLoging = () => {
            dispatch({ type: "LOGIN" })
    };

    const onLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    if(state.user) {
        return<Navigate to="/map" />;
    }

    return <h1>
            <Button variant="contained" onClick={onLoging}>Log in</Button>
        </h1>
};

