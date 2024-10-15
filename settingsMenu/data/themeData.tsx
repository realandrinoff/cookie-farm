import AsyncStorage from "@react-native-async-storage/async-storage"

export const getTheme = async() => { 
    const currentTheme = await AsyncStorage.getItem("theme");
    if (currentTheme === null) {
        await AsyncStorage.setItem("theme", "light")
        return "light"
    }
    else {
        return currentTheme
    }
}
export const changeTheme = async() => {
    const currentTheme = await getTheme()
    if (currentTheme === "light") {
        await AsyncStorage.setItem("theme", "dark")
    }
    else {
        await AsyncStorage.setItem("theme", "light")
    }
}
