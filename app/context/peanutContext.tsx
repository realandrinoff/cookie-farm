import { createContext } from "react";
import { peanutAction } from "../../dataManagement/peanutData";

export const PeanutContext = createContext(0);
export const PeanutDispatchContext =
  createContext<React.Dispatch<peanutAction>>(null);
