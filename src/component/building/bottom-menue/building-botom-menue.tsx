import { Card, IconButton } from "@mui/material";
import { FC } from "react";
import "./building-botom-menue.css"
import { getBottombarTools } from "./bottombat-tools";
import { useAppContext } from "../../../middleware/context-provider";


export const BuildingBottomMenue: FC = () => {

    const [state, dispatch] = useAppContext();

    const tools = getBottombarTools(state, dispatch);
    return ( 
    <Card className="bottom-menu">
            {tools.map((tool) => (
                <IconButton onClick={tool.action} key={tool.name}>{tool.icon}</IconButton>
            ))}
    </Card>
    );
};