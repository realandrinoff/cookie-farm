import { createContext } from 'react';
import { levelType } from '../levelData';

export const LevelContext = createContext(0);
export const LevelDispatchContext = createContext<React.Dispatch<levelType>>(null);