import { Box, Button, CssBaseline } from "@mui/material";

import { FC, useState } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { BuildingTopBar } from "./side-menu/building-topbar";
import { BuildingDrawer } from "./side-menu/building-drower";
import { getDrawerHeader } from "./side-menu/mui.utils";
import { BuildingFrontMenu } from "./front-menue/building-front-menue";
import { FrontMenuMode } from "./types";
import { BuildingViewport } from "./viewport/building-viewport";

export const BuildingViewer: FC = () => {
  const [sideOpen, steSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [frontMode, setFrontMode] = useState<FrontMenuMode>("BuildingInfo");
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

  const toggleFronMenue = (active: boolean, mode?: FrontMenuMode) => {
    if (mode) {
      setFrontMode(mode);
    }
    setFrontOpen(active);
  };

  const DrowerHeader = getDrawerHeader();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <BuildingTopBar
        width={width}
        open={sideOpen}
        onOpen={() => toggleDrawer(true)}
      />

      <BuildingDrawer
        width={width}
        open={sideOpen}
        onClose={() => toggleFronMenue(false)}
        onToggleMenu={toggleFronMenue}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrowerHeader />

        <BuildingFrontMenu
          onToggleMenu={() => toggleFronMenue(false)}
          open={frontOpen}
          mode={frontMode}
        />

        <BuildingViewport></BuildingViewport>
      </Box>
    </Box>
  );
};
