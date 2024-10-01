import AsyncStorage from "@react-native-async-storage/async-storage";

// Just for testing purposes i will grant myself all the cookies
export default async function library()  {
  await AsyncStorage.setItem("choc", "bought")
}
// checks if the cookie type is bought or not, if not will not be set at all
export const checkCookieType = async(type: string) => {
  const allTypes = await AsyncStorage.getAllKeys()
  
  if (allTypes.includes(type)) {
    return true
  } else {
    return false
  }
}
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
  const addCookies = async (value: number) => {
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
        await addCookies(newValue);
      })();

      return newValue;
    }
    default: {
      throw Error("unknown action {action.type}");
    }
  }
}
function async() {
  throw new Error("Function not implemented.");
}

