import { FC } from "react";
import { useAppContext } from "../../../../middleware/context-provider";



export const PropertiesMenue: FC = () => {
    const [state, dispatch] = useAppContext();

    return <div>PropertiesMenue</div>;
}