import { FC } from "react";
import { useAppContext } from "../../../../middleware/context-provider";
import "./front-menue-content.css";
import DeleteIcon from "@mui/icons-material/Clear";
import { Button, IconButton } from "@mui/material";

export const ModelListMenue: FC = () => {
  const [{ building, user }, dispatch] = useAppContext();

  if (!building || !user) {
    throw new Error("Error building not found!");
  }

  const onUploadModel = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.visibility = "hidden";
    document.body.appendChild(input);
    input.onchange = () => {
      if (input.files && input.files.length) {
        const file = input.files[0];
        if (!file.name.includes(".ifc")) return;
        const newBuilding = { ...building };
        const id = `${file.name}-${performance.now()}`;
        const model = { name: file.name, id };
        newBuilding.models.push(model);
        dispatch({
          type: "UPLOAD_MODEL",
          payload: {
            building: newBuilding,
            file,
            model,
          },
        });
      }
      input.remove();
    };
    input.click();
  };

  const onDeleteModel = (id: string) => {
    const newBuilding = { ...building };
    const model = newBuilding.models.find((model) => model.id === id);
    if (!model) throw new Error("Model not found!");
    newBuilding.models = newBuilding.models.filter((model) => model.id !== id);
    dispatch({
      type: "DELELETE_MODEL",
      payload: { building: newBuilding, model },
    });
  };

  return (
    <div>
      {building?.models.length ? (
        building.models.map((model) => (
          <div className="list-item" key={model.id}>
            <IconButton onClick={ () => onDeleteModel(model.id)}>
              <DeleteIcon />
            </IconButton>
            <span className="margin-left">{model.name}</span>
          </div>
        ))
      ) : (
        <p>This building has no models!</p>
      )}

      <div className="list-item">
        <Button onClick={onUploadModel}>Upload model</Button>
      </div>
    </div>
  );
};
