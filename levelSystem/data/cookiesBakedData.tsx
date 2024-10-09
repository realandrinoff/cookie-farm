import AsyncStorage from '@react-native-async-storage/async-storage';

export const CheckCookiesBaked = async() => {
    const cookiesBakedString = await AsyncStorage.getItem("cookiesBaked")
    const cookiesBakedNumber = JSON.parse(cookiesBakedString) as number
    if (cookiesBakedNumber === null) { 
        AsyncStorage.setItem("cookiesBaked", "0")
        return 0
        
    }
    return cookiesBakedNumber
}
export type cookiesBakedType = {
    type: string,
    value: number
}

export function cookiesBakedReducer(
    cookiesBakedCount: number,
    action: cookiesBakedType
  ): number {
    const setCookiesBaked = async (value: number) => {
      await AsyncStorage.setItem("cookiesBaked", JSON.stringify(value));
    };
    // switch to call dispatch to add, remove
    switch (action.type) {
      case "initialize": {
        return action.value;
      }
      case "add": {
        const newValue = cookiesBakedCount + action.value;
        (async () => {
          await setCookiesBaked(newValue);
        })();
        return newValue;
      }
      case "reset": {
        (async () => {
          await setCookiesBaked(0);
        })();
        return 0;
    }
      default: {
        throw Error("unknown action {action.type}");
      }
    }
  }