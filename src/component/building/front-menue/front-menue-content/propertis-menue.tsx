import { FC, useEffect } from "react";
import { useAppContext } from "../../../../middleware/context-provider";
import { Divider } from "@mui/material";

export const PropertiesMenue: FC = () => {
  const [state] = useAppContext();
  
useEffect( () => {
  console.log(state.properties)
}, [state.properties])
 
  return (
    <div>
      {Boolean(state.properties.length) ? (
        <Divider />
      ) : (
        <p>No item selected.</p>
      )}
      {state.properties.map((property) => (
        <div key={property.name}>
          <div className="value-pair list-item">
            <div>{property.name}</div>
            <p>:</p>
            <div>{property.value}</div>
          </div>
          <Divider />
        </div>
      ))}
      
    </div>
    
  );
};
