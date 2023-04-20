import { Button, Card, CardContent, IconButton } from "@mui/material";
import { FC } from "react";
import "./building-front-menue.css";
import CloseIcon from "@mui/icons-material/Close";
import { BuildingInfoMenu } from "./front-menue-content/building-info-menue";
import { FrontMenuMode } from "./types";
import { ModelListMenu } from "./front-menue-content/model-list-menue";
import { PropertiesMenue } from "./front-menue-content/propertis-menue";
import { FloorplanMenu } from "./front-menue-content/floorplan-menue";



export const BuildingFrontMenu: FC<{
  mode: FrontMenuMode;
  open: boolean;
  onToggleMenu: (active: boolean) => void;
}> = ({ mode, open, onToggleMenu }) => {
  if (!open) {
    return <></>;
  }

  const content = new Map<FrontMenuMode, any>();
  content.set("BuildingInfo", <BuildingInfoMenu onToggleMenu={onToggleMenu} />);
  content.set("ModelList", <ModelListMenu />);
  content.set("Properties", <PropertiesMenue />);
  content.set("Floorplans", <FloorplanMenu />);

  const titles = {
    BuildingInfo: "Building Information",
    ModelList: "ModelList",
    Properties: "Properties",
    Floorplans: "Floorplans",
  };

  const title = titles[mode];

  return (
    <Card className="front-menu">
      <CardContent>
        <div className="front-menu-header">
          <h2>{title}</h2>
          <IconButton onClick={() => onToggleMenu(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="front-menu-content">{content.get(mode)}</div>
      </CardContent>
    </Card>
  );
};

