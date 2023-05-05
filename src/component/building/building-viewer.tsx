import { Box, Button, CssBaseline } from "@mui/material";

import { FC, useState } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { BuildingTopbar } from "./side-menu/building-topbar";
import { BuildingDrawer } from "./side-menu/building-drower";
import { getDrawerHeader } from "./side-menu/mui.utils";
import { BuildingFrontMenu } from "./front-menue/building-front-menue";
import { FrontMenuMode } from "./front-menue/types";
import { BuildingViewport } from "./viewport/building-viewport";
import { BuildingBottomMenue } from "./bottom-menue/building-botom-menue";
import { FragmentsMenu } from "./fragments-menu/fragments-menu";


export const BuildingViewer: FC = () => {
  const [sideOpen, steSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [frontMode, setFrontMenu] = useState<FrontMenuMode>("BuildingInfo");
  const [width] = useState(240);

  const [{ user, building }] = useAppContext();
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!building) {
    return <Navigate to={"/map"} />;
  }

  const toggleDrawer = (active: boolean) => {
    steSideOpen(active);
  };

  const toggleFrontMenu = (active = !frontOpen, mode?: FrontMenuMode) => {
    if (mode) {
      setFrontMenu(mode);
    }
    setFrontOpen(active);
  };

  const DrowerHeader = getDrawerHeader();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <BuildingTopbar
        width={width}
        open={sideOpen}
        onOpen={() => toggleDrawer(true)}
      />

      <BuildingDrawer
        width={width}
        open={sideOpen}
        onClose={() => toggleDrawer(false)}
        onToggleMenu={toggleFrontMenu}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrowerHeader />
        <FragmentsMenu  />
        <BuildingFrontMenu
          onToggleMenu={() => toggleFrontMenu(false)}
          open={frontOpen}
          mode={frontMode}/>
        <BuildingBottomMenue/>
        <BuildingViewport></BuildingViewport>
      </Box>
    </Box>
  );
};
