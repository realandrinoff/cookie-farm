import AsyncStorage from "@react-native-async-storage/async-storage";



export const getCookies = async (): Promise<number> => {
  var amountCookies = await AsyncStorage.getItem("cookies");

  if (amountCookies === null) {
    console.log("No cookies");

    return 0;
  }

  return JSON.parse(amountCookies) as number;
};

// export function setCooldown() {}

// export function startCooldown() {}


export type cookieAction = {
    type: string;
    value: number;
  }
  
export function cookieReducer(cookieCount: number, action: cookieAction): number {
    const saveCookies = async (value: number) => {
      await AsyncStorage.setItem("cookies", JSON.stringify(value));
    }
  
    switch (action.type) {
      case "initialize": {
        return action.value;
      }
      case "add": {
        const newValue = cookieCount + action.value;
  
        (async() => { await saveCookies(newValue);})()
  
        return newValue;
      }
      default: {
        throw Error("unknown action {action.type}");
      }
    }
  }