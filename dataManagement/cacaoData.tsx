import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCacaoAmount = async () => {
  const cacaoString = await AsyncStorage.getItem("cacao");
  const cacaoNumber = JSON.parse(cacaoString) as number;
  if (cacaoNumber === null) {
    return 0;
  } else {
    return cacaoNumber;
  }
};

export const addCacao = async (
  addAmount: number,
  setCacaoAmount: React.Dispatch<number>
) => {
  const cacaoString = await AsyncStorage.getItem("cacao");
  const cacaoNumber = JSON.parse(cacaoString) as number;
  if (cacaoNumber == null) {
    setCacaoAmount(addAmount);
  } else {
    setCacaoAmount(cacaoNumber + addAmount);
  }
};

export type cacaoAction = {
  type: string;
  value: number;
};

export const checkCacaoLevel = async (
  setCacaoLevel: React.Dispatch<number>
) => {
  const currentCacaoLevel = await AsyncStorage.getItem("cacaoLevel");
  if (currentCacaoLevel === null) {
    setCacaoLevel(1);
    await AsyncStorage.setItem("cacaoLevel", JSON.stringify(1));

    return 1;
  } else {
    setCacaoLevel(JSON.parse(currentCacaoLevel) as number);
    return JSON.parse(currentCacaoLevel) as number;
  }
};

export const increaseCacaoLevel = async () => {
  const currentCacaoLevel = await AsyncStorage.getItem("cacaoLevel");
  if (currentCacaoLevel === null) {
    await AsyncStorage.setItem("cacaoLevel", JSON.stringify(2));
  } else {
    await AsyncStorage.setItem(
      "cacaoLevel",
      JSON.stringify(JSON.parse(currentCacaoLevel) + 1)
    );
  }
};

// for test purposes

export const resetCacaoLevel = async () => {
  await AsyncStorage.setItem("cacaoLevel", JSON.stringify(1));
  return 
};

export function cacaoReducer(cacaoCount: number, action: cacaoAction): number {
  const setCacao = async (value: number) => {
    await AsyncStorage.setItem("cacao", JSON.stringify(value));
  };
  // switch to call dispatch to add, remove(will add soon)
  switch (action.type) {
    case "initialize": {
      return action.value;
    }
    case "add": {
      const newValue = cacaoCount + action.value;
      (async () => {
        await setCacao(newValue);
      })();
      return newValue;
    }
    case "remove": {
      const newValue = cacaoCount - action.value;
      (async () => {
        await setCacao(newValue);
      })();
      return newValue;
    }
    case "reset": {
      (async() => {
        await setCacao(0)
      })();
      return 0
    }
    default: {
      throw Error("unknown action {action.type}");
    }
  }
}
