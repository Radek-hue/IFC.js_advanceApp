import { Tool } from "../../../types";
import CutIcon from "@mui/icons-material/ContentCut";
import RulerIcon from "@mui/icons-material/Straighten";
import ExplodeIcon from "@mui/icons-material/ImportExport";
import LayersIcon from "@mui/icons-material/Layers";

export function getBottombarTools(): Tool[] {
  const tools = [
            {
            name: "Clipping planes",
            icon:  <CutIcon />,
            active: false,
            action: (dispatch: any) => {
                console.log("Cut with planes!");
            },
        },
        {
            name: "Dimensions",
            icon:  <RulerIcon />,
            active: false,
            action: (dispatch: any) => {
                console.log("Mesuring model!");
            },
        },
        {
            name: "Explosion",
            icon:  <ExplodeIcon />,
            active: false,
            action: (dispatch: any) => {
                const tool = tools.find((tool) => tool.name === "Explosion");
                if(tool) {
                  tool.active = !tool.active;
                  dispatch({type:"EXPLODE_MODEL", payload: tool.active});
                }
            },
          },
            {
              name: "Florrt plan navigation",
              icon: <LayersIcon />,
              active: false,
              action: (dispatch:any) => {
                console.log('hei')
              }
            },
    ];
    return tools;
}

