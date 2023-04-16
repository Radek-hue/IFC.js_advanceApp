import { Box, Button, CssBaseline } from "@mui/material";

import { FC, useState } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { BuildingTopBar } from "./building-topbar";
import { BuildingDrawer } from "./building-drower";
import { getDrawerHeader } from "./mui.utils";
import { BuildingFrontMenu } from "./front-menue/building-front-menue";

export const BuildingViewer: FC = () => {
  const [sideOpen, steSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [width] = useState(240);

  const [{ user, building }] = useAppContext();
  if(!user){
    return <Navigate to="/login" />;
  }

  if (!building) {
    return <Navigate to={"/map"} />;
  }

  const toggleDrawer = (active: boolean) => {
    steSideOpen(active);
  };

  const toggleFronMenue = (active = !frontOpen) => {
    setFrontOpen(active)
  }

  const DrowerHeader = getDrawerHeader()
 
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
        onClose={() => toggleDrawer(false)}
        onToggleMenu={toggleFronMenue}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrowerHeader />

        <BuildingFrontMenu
          onToggleMenu={toggleFronMenue}
          open={frontOpen}
          mode="BuildingInfo"
        />

  
      </Box>
    </Box>
  );
};