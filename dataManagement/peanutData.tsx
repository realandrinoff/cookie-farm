import AsyncStorage from "@react-native-async-storage/async-storage";

export const getPeanutAmount = async () => {
  const peanutString = await AsyncStorage.getItem("peanut");
  const peanutNumber = JSON.parse(peanutString) as number;
  if (peanutNumber === null) {
    return 0;
  } else {
    return peanutNumber;
  }
};

export const addPeanut = async (
  addAmount: number,
  setPeanutAmount: React.Dispatch<number>
) => {
  const peanutString = await AsyncStorage.getItem("peanut");
  const peanutNumber = JSON.parse(peanutString) as number;
  if (peanutNumber == null) {
    setPeanutAmount(addAmount);
  } else {
    setPeanutAmount(peanutNumber + addAmount);
  }
};

export type peanutAction = {
  type: string;
  value: number;
};

export const checkPeanutLevel = async (
  setPeanutLevel: React.Dispatch<number>
) => {
  const currentPeanutLevel = await AsyncStorage.getItem("peanutLevel");
  if (currentPeanutLevel === null) {
    setPeanutLevel(1);
    await AsyncStorage.setItem("peanutLevel", JSON.stringify(1));

    return 1;
  } else {
    setPeanutLevel(JSON.parse(currentPeanutLevel) as number);
    return JSON.parse(currentPeanutLevel) as number;
  }
};

export const increasePeanutLevel = async () => { 
  const currentPeanutLevel = await AsyncStorage.getItem("peanutLevel");
  if (currentPeanutLevel === null) {
    await AsyncStorage.setItem("peanutLevel", JSON.stringify(2));
  } else {
    await AsyncStorage.setItem(
      "peanutLevel",
      JSON.stringify(JSON.parse(currentPeanutLevel) + 1)
    );
  }
};

// for test purposes

export const resetPeanutLevel = async () => {
  await AsyncStorage.setItem("peanutLevel", JSON.stringify(1));
  return 
};

export function peanutReducer(peanutCount: number, action: peanutAction): number {
  const setPeanut = async (value: number) => {
    await AsyncStorage.setItem("peanut", JSON.stringify(value));
  };
  // switch to call dispatch to add, remove(will add soon)
  switch (action.type) {
    case "initialize": {
      return action.value;
    }
    case "add": {
      const newValue = peanutCount + action.value;
      (async () => {
        await setPeanut(newValue);
      })();
      return newValue;
    }
    case "remove": {
      const newValue = peanutCount - action.value;
      (async () => {
        await setPeanut(newValue);
      })();
      return newValue;
    }
    case "reset": {
      (async() => {
        await setPeanut(0)
      })()
      return 0
    }
    default: {
      throw Error("unknown action {action.type}");
    }
  }
}
