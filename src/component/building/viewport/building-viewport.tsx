import { FC, useRef, useEffect, useState } from "react";
import { useAppContext } from "../../../middleware/context-provider";
import "./building-viewport.css";
import Model from "../../../../public/properties.json";

export const BuildingViewport: FC = () => {
  const [state, dispatch] = useAppContext();
  const containerRef = useRef(null);
  const { user, building } = state;

  useEffect(() => {
    const container = containerRef.current;
    if (container && user) {
      dispatch({ type: "START_BUILDING", payload: { container, building } });
    }
  }, []);

  return (
    <>  
            <div className="ifc-tree-menu">
          <ul id="myUL">
            <li id="tree-root">
              <span className="caret">Wall</span>
              <ul className="nested">
                <li>Id 1</li>
                <li>Id 2</li>
                <li>
                  <span className="caret">Slab</span>
                  <ul className="nested">
                    <li>Id 5</li>
                    <li>Id 20</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
{/* 
          {Model.set( (model: string) => {
            return (
              <p>{model}</p>
            )
          })} */}
        </div>

        <div className="full-screen" ref={containerRef} />
    </>
  );
};