import { FC } from "react";
import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { getAppBar } from "./mui.utils";
import "./drower.css";

export const BuildingTopbar: FC<{
  open: boolean;
  onOpen: () => void;
  width: number;
}> = (props) => {
  const { open, onOpen, width } = props;

  const AppBar = getAppBar(width);

  return (
    <AppBar className="newColor" position="fixed" open={open}>
      <Toolbar
      sx={{
        background: "rgb( 194, 195, 197)",
      }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          edge="start"
          sx={{
            // background: "rgb( 167, 25, 48)",
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
        sx={{
          color: "black",
        }}
         variant="h5" noWrap component="div">
          Building viewer
        </Typography>
        <div className="AghIcon">
          <div className="black"></div>
          <div className="read"></div>
          <div className="green"></div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
