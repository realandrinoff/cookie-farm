import { createContext } from "react";
import { cacaoAction } from "../dataManagement/cacaoData";

export const CacaoContext = createContext(0);
export const CacaoDispatchContext =
  createContext<React.Dispatch<cacaoAction>>(null);
