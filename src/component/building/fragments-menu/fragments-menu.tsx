import { useState, useEffect } from "react";
import { Card, IconButton } from "@mui/material";
import "./fragments-menu.css"
import { useAppContext } from "../../../middleware/context-provider";

export const FragmentsMenu: React.FC = () => {
    const [state, dispatch] = useAppContext();
    const [propertiesList, setPropertiesList] = useState<Array<any>>([]);

    useEffect(() => {
      setPropertiesList(state.buildingFragmentsMenu);
    }, [state, propertiesList])
    console.log('dupa')
console.log(propertiesList)
    return ( 
    <Card className="fragments-menu-card">
      {propertiesList && propertiesList.map(fragment => (
        
        <div key={fragment.Name.value}>{fragment.Name.value}</div>
      ))}
    </Card>
    );
}