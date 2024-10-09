import { createContext } from "react";
import { cookiesBakedType } from "../cookiesBakedData";

export const CookiesBakedContext = createContext(0);
export const CookiesBakedDispatchContext =
  createContext<React.Dispatch<cookiesBakedType>>(null);
