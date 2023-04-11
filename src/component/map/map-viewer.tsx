import { FC, useEffect, useRef } from "react";
import { UserAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export const MapViewer: FC = () => {

    const [state, dispatch] = UserAppContext ();
    const canvasRef =  useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas && state.user) {
            dispatch({type: "START_MAP", payload: canvas});
        }

        return() => {
            dispatch({ type: "REMOVE_MAP"});
        }
    }, []);

        if(!state.user) {
            return<Navigate to="/login" />;
        }

    const onLogout = () => {
        dispatch({ type: "LOGOUT"});
    }
 
    return (
    <>
    
    <div className="full-screen" ref={canvasRef}/>
    <Button onClick={onLogout}>Log out</Button>
    </>
    );
}