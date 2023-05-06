import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
} from "react";
import { Card } from "@mui/material";
import "./fragments-menu.css";
import { useAppContext } from "../../../middleware/context-provider";

export const FragmentsMenu: React.FC = () => {
  const [state, dispatch] = useAppContext();
  const [propertiesList, setPropertiesList] = useState<Array<any>>([]);

  useEffect(() => {
    setPropertiesList(state.buildingFragmentsMenu);
  }, [state]);

  // this.events.trigger({ type: "UPDATE_PROPERTIES", payload: [] });

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
    // const objectName = propertiesList.filter(
    //   (fragment) =>
    //     fragment.hasOwnProperty("Name") &&
    //     fragment.Name.hasOwnProperty("value") &&
    //     fragment.Name.value.length > 0
    // );
    // setFilterObj(objectName);
    // console.log('dupa')
    console.log(mappedFragmentProperties);
    // console.log(obiektCały)
    // console.log(obiektCały)

    // if () {}
  };
  return (
    <Card className="fragments-menu-card">
      <button>List</button>
      <div className="fragments-menu-card-list">
        {propertiesList &&
          propertiesList.map((fragment: any, index) => (
            <div key={index} onClick={() => clickHandler(fragment)}>
              {fragment.Name.value}
            </div>
          ))}
      </div>
    </Card>
  );
};
