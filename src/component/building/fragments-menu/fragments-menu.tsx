import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import "./fragments-menu.css";
import { useAppContext } from "../../../middleware/context-provider";
import ListIcon from '@mui/icons-material/List';

export const FragmentsMenu: React.FC = () => {
  const [state, dispatch] = useAppContext();
  const [propertiesList, setPropertiesList] = useState<Array<any>>([]);
  const [rolled, setRolled] = useState(true);

  useEffect(() => {
    setPropertiesList(state.buildingFragmentsMenu);
  }, [state]);

  // this.events.trigger({ type: "UPDATE_PROPERTIES", payload: [] });

  const rolledHnadler = () => {
    setRolled(rolled => !rolled)
  }

  const clickHandler = (fragment: any) => {
    const obiektDiv = fragment;

    let mappedFragmentProperties = Object.keys(fragment).map((key) => {
      let valueForKey = fragment[key];
      console.log(valueForKey, key);
      if (
        valueForKey &&
        valueForKey.hasOwnProperty("value") &&
        valueForKey.value &&
        valueForKey.value.length > 0
      ) {
        return { name: key, value: valueForKey.value };
      }
      if (valueForKey && !valueForKey.hasOwnProperty("value")) {
        return { name: key, value: valueForKey };
      }
    });

    mappedFragmentProperties = mappedFragmentProperties.filter((ele) => ele);
    dispatch({ type: "UPDATE_PROPERTIES", payload: mappedFragmentProperties });
  };
  return (
    <>
    
      {rolled && <Card className="fragments-menu-card fragments-menu-card-rolled">
        <ListIcon className="button-list" onClick={rolledHnadler}>List</ListIcon>
        <div className="fragments-menu-cardUP">
          <ul className="fragments-menu-card-list">
            {propertiesList &&
              propertiesList.map((fragment: any, index) => (
                <div key={index} onClick={() => clickHandler(fragment)}>
                  {fragment.Name.value}
                </div>
              ))}
          </ul>
        </div>
      </Card>}
      {!rolled && <Card className="fragments-menu-card">
        <button className="button-list" onClick={rolledHnadler}>List</button>
        <div className="fragments-menu-cardUP">
          <ul className="fragments-menu-card-list">
            {propertiesList &&
              propertiesList.map((fragment: any, index) => (
                <div key={index} onClick={() => clickHandler(fragment)}>
                  {fragment.Name.value}
                </div>
              ))}
          </ul>
        </div>
      </Card>}
    </>
  );
};
