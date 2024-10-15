import AsyncStorage from '@react-native-async-storage/async-storage';

export const CheckLevel = async() => {
    const levelString = await AsyncStorage.getItem("level")
    const levelNumber = JSON.parse(levelString) as number
    if (levelNumber === null) { 
        AsyncStorage.setItem("level", "1")
        return 1
        
    }
    return levelNumber
}
export type levelType = {
    type: string,
    value: number
}

export function levelReducer(
    levelCount: number,
    action: levelType
  ): number {
    const setLevel = async (value: number) => {
      await AsyncStorage.setItem("level", JSON.stringify(value));
    };
    // switch to call dispatch to add, remove
    switch (action.type) {
      case "initialize": {
        return action.value;
      }
      case "add": {
        const newValue = levelCount + action.value;
        (async () => {
          await setLevel(newValue);
        })();
        return newValue;
      }
      case "reset": {
        (async () => {
          await setLevel(1);
        })();
        return 1;
    }
      default: {
        throw Error("unknown action {action.type}");
      }
    }
  }