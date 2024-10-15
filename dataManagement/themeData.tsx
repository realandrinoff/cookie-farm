import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { getTheme, changeTheme } from "../settingsMenu/data/themeData";

export type themeAction = {
    type: string,
}

export function themeReducer(peanutCount: number, action: themeAction): number {
    const setPeanut = async (value: number) => {
      await AsyncStorage.setItem("peanut", JSON.stringify(value));
    };
    const [currentTheme, setCurrentTheme] = useState<string>("light")
    // switch to call dispatch to add, remove(will add soon)
    switch (action.type) {
      case "initialize": {
        (async()=> {
            setCurrentTheme(await getTheme())
            
        })()
        return 0;
      }
      case "change": {
        (async() => {
            await changeTheme()
            setCurrentTheme(await getTheme())
        })()
        return 0;
    }
      default: {
        throw Error("unknown action {action.type}");
      }
    }
  }
  
