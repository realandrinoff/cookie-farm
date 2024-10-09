import AsyncStorage from "@react-native-async-storage/async-storage";

// gets the amount of cookies written in game files, if null returns 0
export const getCookies = async (): Promise<number> => {
  var amountCookies = await AsyncStorage.getItem("cookies");

  if (amountCookies === null) {
    console.log("No cookies");

    return 0;
  }
  return JSON.parse(amountCookies) as number;
};
// type for reducer
export type cookieAction = {
  type: string;
  value: number;
};

// cookie reducer. needed for element to change the amount of cookies 
export function cookieReducer(
  cookieCount: number,
  action: cookieAction
): number {
  const setCookies = async (value: number) => {
    await AsyncStorage.setItem("cookies", JSON.stringify(value));
  };
  // switch to call dispatch to add, remove(will add soon)
  switch (action.type) {
    case "initialize": {
      return action.value;
    }
    case "add": {
      const newValue = cookieCount + action.value;

      (async () => {
        await setCookies(newValue);
      })();

      return newValue;
    }
    case "remove": {
      if (cookieCount - action.value > 0) {
        const newValue = cookieCount - action.value;
        (async () => {
            await setCookies(newValue)
        })();
        return newValue
      }
      else {
        return cookieCount
      }
        
  }
    default: {
      throw Error("unknown action {action.type}");
    }
  }
}
function async() {
  throw new Error("Function not implemented.");
}

