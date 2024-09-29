import { createContext } from 'react';
import { cookieAction } from './dataManagement';

export const CookieContext = createContext(0);
export const CookieDispatchContext = createContext<React.Dispatch<cookieAction>>(null);