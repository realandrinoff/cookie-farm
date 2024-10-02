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

export function cacaoReducer(cacaoCount: number, action: cacaoAction): number {
  const addCacao = async (value: number) => {
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
        await addCacao(newValue);
      })();
      return newValue;
    }
    default: {
      throw Error("unknown action {action.type}");
    }
  }
}
