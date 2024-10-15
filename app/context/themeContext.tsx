import { createContext } from "react";
import { themeAction } from "../../dataManagement/themeData";


export const ThemeContext = createContext(0);
export const ThemeDispatchContext =
  createContext<React.Dispatch<themeAction>>(null);