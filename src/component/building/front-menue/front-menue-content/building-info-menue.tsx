import React, { FC } from "react";
import { useAppContext } from "../../../../middleware/context-provider";
import { Box, Button, TextField } from "@mui/material";
import "./front-menue-content.css";
import { Navigate } from "react-router-dom";

export const BuildingInfoMenu: FC<{
  onToggleMenu: () => void;
}> = ({ onToggleMenu }) => {
  const [state, dispatch] = useAppContext();

  const { building } = state;

  if (!building) {
    throw new Error("No Building active!");
  }

  const onUpdateBuilding = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newBuilding = { ...building } as any;

    newBuilding.name = data.get("building-name") || building.name;
    newBuilding.name = data.get("building-lat") || building.lat;
    newBuilding.name = data.get("building-lng") || building.lng;

    dispatch({ type: "UPDATE_BUILDING", payload: newBuilding });
    onToggleMenu();
  };

  return (
    <Box component="form" onSubmit={onUpdateBuilding}>
             <div className="list-item">
        <TextField
          fullWidth
          id="building-id"
          label="Building ID"
          name="building-id"
          autoComplete="building-id"
          defaultValue={building.uid}
          disabled={true}
        />
      </div> 

      <div className="list-item">
        <TextField
          fullWidth
          id="building-lng"
          label="Building LNG"
          name="building-lng"
          autoComplete="building-lng"
          defaultValue={building.lng}
        />
      </div>
      <div className="list-item">
        <TextField
          fullWidth
          id="building-lat"
          label="Building LAT"
          name="building-lat"
          autoComplete="building-lat"
          defaultValue={building.lat}
        />
      </div>
      <div className="list-item">
        <TextField
          fullWidth
          id="building-name"
          label="Building Name"
          name="building-name"
          autoComplete="building-name"
          defaultValue={building.name}
        />
      </div>
      <div className="list-item">
        <Button type="submit" className="submit-button">
          Update building
        </Button>
      </div>
    </Box>
  );
};
