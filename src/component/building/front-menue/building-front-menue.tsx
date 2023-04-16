import { Button, Card, CardContent } from "@mui/material";
import { FC } from "react";
import "./building-front-menue.css";
import CloseIcon from "@mui/icons-material/Close";
import { BuildingInfoMenu } from "./front-menue-content/building-info-menue";
import { FrontMenuMode } from "../types";
import { ModelListMenue } from "./front-menue-content/model-list-menue";



export const BuildingFrontMenu: FC<{
  mode: FrontMenuMode;
  open: boolean;
  onToggleMenu: () => void;
}> = ({ mode, open, onToggleMenu }) => {
  if (!open) {
    return <></>;
  }

  const content = new Map<FrontMenuMode, any>();
  content.set("BuildingInfo", <BuildingInfoMenu onToggleMenu={onToggleMenu}/>);
  content.set("ModelList", <ModelListMenue/>);

  const titles = {
    BuildingInfo: "Building Information",
    ModelList: "Model List"
  };

  const title = titles[mode];

  return (
    <Card className="front-menu">
      <CardContent>
        <div className="front-menu-header">
          <h2>{title}</h2>
          <Button onClick={() => onToggleMenu()}>
            <CloseIcon />
          </Button>
        </div>
        <div className="front-menu-content">{content.get(mode)}</div>
      </CardContent>
    </Card>
  );
};


